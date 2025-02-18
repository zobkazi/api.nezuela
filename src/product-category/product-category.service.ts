import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';

@Injectable()
export class ProductCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoryDto: CreateProductCategoryDto) {
    const existingCategory = await this.prisma.productCategory.findUnique({
      where: { name: createCategoryDto.name },
    });

    if (existingCategory) {
      throw new ConflictException('Category already exists!');
    }

    return this.prisma.productCategory.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return this.prisma.productCategory.findMany({
      include: { products: true },
    });
  }

  async findOne(id: number) {
    const category = await this.prisma.productCategory.findUnique({
      where: { id },
      include: { products: true },
    });

    if (!category) throw new NotFoundException('Category not found');
    return category;
  }
}
