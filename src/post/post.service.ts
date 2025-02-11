// post.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Post } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  // Create Post
  async create(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  // Get Paginated, Sorted, Filtered, and Searched Posts
  async findAll(query: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    tags?: string[];
    sortBy?: 'asc' | 'desc';
  }): Promise<{ posts: Post[]; total: number }> {
    const { page = 1, limit = 10, search, category, tags, sortBy = 'desc' } = query;
    const skip = (page - 1) * limit;

    const where: Prisma.PostWhereInput = {
      OR: search
        ? [{ title: { contains: search, mode: 'insensitive' } }, { content: { contains: search, mode: 'insensitive' } }]
        : undefined,
      category: category ? { name: category } : undefined,
      tags: tags?.length ? { some: { name: { in: tags } } } : undefined,
    };

    const [posts, total] = await Promise.all([
      this.prisma.post.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: sortBy },
        include: { category: true, tags: true },
      }),
      this.prisma.post.count({ where }),
    ]);

    return { posts, total };
  }

  // Get One Post by ID
  async findOne(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({
      where: { id },
      include: { category: true, tags: true },
    });
  }

  // Update Post
  async update(id: number, data: Prisma.PostUpdateInput): Promise<Post> {
    return this.prisma.post.update({ where: { id }, data });
  }

  // Delete Post
  async delete(id: number): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }
}
