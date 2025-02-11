// tag.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Tag, Prisma } from '@prisma/client';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  update(arg0: number, updateTagDto: UpdateTagDto) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  // Create Tag
  async create(data: Prisma.TagCreateInput): Promise<Tag> {
    return this.prisma.tag.create({
      data,
    });
  }

  // Get All Tags
  async findAll(): Promise<Tag[]> {
    return this.prisma.tag.findMany();
  }

  // Get One Tag by ID
  async findOne(id: number): Promise<Tag | null> {
    return this.prisma.tag.findUnique({
      where: { id },
    });
  }

  // Delete Tag
  async delete(id: number): Promise<Tag> {
    return this.prisma.tag.delete({
      where: { id },
    });
  }
}
