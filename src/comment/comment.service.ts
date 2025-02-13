import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(CreateCommentDto: CreateCommentDto) {
    
     // Check if comment already exist
     const existingComment = await this.prisma.comment.findFirst({
      where: { content: CreateCommentDto.content },
    });
    if (existingComment) {
      throw new ConflictException('Tag already exists');
    }


    return this.prisma.comment.create({
      data: {
        content: CreateCommentDto.content,
        postId: CreateCommentDto.postId,
        userId: CreateCommentDto.userId,
      },
    });
  }

  async findAll() {
    return this.prisma.comment.findMany({
      include: {
        post: true,
        
      },
    });
  }

  async findOne(id: number) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
      include: { post: true },
    });

    if (!comment) throw new NotFoundException('Comment not found');
    return comment;
  }



  async update(id: number, updateCommentDto: UpdateCommentDto) {
    // Check if comment exists
    const existingComment = await this.prisma.comment.findUnique({
      where: { id },
    });

    if (!existingComment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    // If content is being updated, check for duplicates
    if (updateCommentDto.content) {
      const duplicateComment = await this.prisma.comment.findFirst({
        where: {
          content: updateCommentDto.content,
          id: { not: id }, // Exclude current comment from check
        },
      });

      if (duplicateComment) {
        throw new ConflictException('A comment with this content already exists');
      }
    }

    // Perform update
    return this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });
  }


  async remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
