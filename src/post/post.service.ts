import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Post } from '@prisma/client';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  // Create Post
  async create(data: CreatePostDto): Promise<Post> {
    // Check if post already exist
    const existingPost = await this.prisma.post.findUnique({
      where: { slug: data.slug },
    });
    if (existingPost) {
      throw new ConflictException('Post already exists');
    }

    return this.prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        slug: data.slug,
        author: {
          connect: { id: data.authorId },
        },
        categories: {
          create: data.categoryId
            ? [{ category: { connect: { id: data.categoryId } } }]
            : [],
        },
        tags: {
          create: data.tags
            ? data.tags.map((tagId) => ({
                tag: { connect: { id: parseInt(tagId) } },
              }))
            : [],
        },
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
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
    const {
      page = 1,
      limit = 10,
      search,
      category,
      tags,
      sortBy = 'desc',
    } = query;

    const skip = (page - 1) * limit;

    const where: Prisma.PostWhereInput = {
      AND: [
        search
          ? {
              OR: [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
              ],
            }
          : undefined,
        category
          ? {
              categories: {
                some: {
                  category: {
                    name: { equals: category, mode: 'insensitive' },
                  },
                },
              },
            }
          : undefined,
        tags?.length
          ? {
              tags: {
                some: {
                  tag: {
                    name: { in: tags },
                  },
                },
              },
            }
          : undefined,
      ].filter(Boolean) as Prisma.PostWhereInput[],
    };

    const [posts, total] = await Promise.all([
      this.prisma.post.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: sortBy },
        include: {
          categories: {
            include: {
              category: true,
            },
          },
          tags: {
            include: {
              tag: true,
            },
          },
        },
      }),
      this.prisma.post.count({ where }),
    ]);

    return { posts, total };
  }

  // Update Post
  async update(id: number, data: UpdatePostDto): Promise<Post> {
    const updateData: Prisma.PostUpdateInput = {
      title: data.title,
      content: data.content,
      slug: data.slug,
      coverImage: data.coverImage,
      excerpt: data.excerpt
    };

    if (data.categoryId) {
      updateData.categories = {
        deleteMany: {},
        create: [{ category: { connect: { id: data.categoryId } } }],
      };
    }

    if (data.tags) {
      updateData.tags = {
        deleteMany: {},
        create: data.tags.map((tagId) => ({
          tag: { connect: { id: parseInt(tagId) } },
        })),
      };
    }

    return this.prisma.post.update({
      where: { id },
      data: updateData,
      // include: {
      //   categories: {
      //     include: {
      //       category: true,
      //     },
      //   },
      //   tags: {
      //     include: {
      //       tag: true,
      //     },
      //   },
      // },
    });
  }

  // Delete Post
  async delete(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
      
    });
  }
}
