// category.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  // Create Category
  async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }

  // Get All Categories
  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  // Get One Category by ID
  async findOne(id: number): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  // Delete Category
  async delete(id: number): Promise<Category> {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
