import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryDto: CreateCategoryDto) {
    // Check if category already exist
    const existingCategory = await this.prisma.category.findUnique({
      where: { name: CreateCategoryDto.name },
    });
    if (existingCategory) {
      throw new ConflictException('Category already exists');
    }

    return this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        slug: createCategoryDto.slug,
      },
    });
  }

  async findAll() {
    return this.prisma.category.findMany({
      include: { posts: true }, // Include related posts
    });
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: { posts: true },
    });

    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async remove(id: number) {
    return this.prisma.category.delete({ where: { id } });
  }
}
