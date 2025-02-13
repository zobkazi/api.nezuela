import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    
     // Check if comment already exist
     const existingTag = await this.prisma.tag.findUnique({
      where: { name: CreateCommentDto.name },
    });
    if (existingTag) {
      throw new ConflictException('Tag already exists');
    }


    return this.prisma.comment.create({
      data: {
        content: createCommentDto.content,
        postId: createCommentDto.postId,
        userId: createCommentDto.userId,
      },
    });
  }

  async findAll() {
    return this.prisma.comment.findMany({
      include: {
        post: true,
        user: true,
      },
    });
  }

  async findOne(id: number) {
    const comment = await this.prisma.comment.findUnique({
      where: { id },
      include: { post: true, user: true },
    });

    if (!comment) throw new NotFoundException('Comment not found');
    return comment;
  }

  async remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
