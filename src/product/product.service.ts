// src/product/product.service.ts
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
      // Check if Product already exist

      const existingProduct = await this.prisma.product.findUnique({
        where: {name: createProductDto.name}
      })
      if(existingProduct) {
        throw new ConflictException('Product already exists!')
      }
    return this.prisma.product.create({ data: createProductDto });
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: 'asc' | 'desc';
    search?: string;
    minPrice?: number;
    maxPrice?: number;
    brand?: string;
  }) {
    const {
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      order = 'desc',
      search,
      minPrice,
      maxPrice,
      brand,
    } = query;
  
    const skip = (page - 1) * limit;
  
    return this.prisma.product.findMany({
      where: {
        AND: [
          search
            ? {
                OR: [
                  { name: { contains: search, mode: 'insensitive' } },
                  { description: { contains: search, mode: 'insensitive' } },
                ],
              }
            : {},
          minPrice ? { price: { gte: minPrice } } : {},
          maxPrice ? { price: { lte: maxPrice } } : {},
          brand ? { brand: { equals: brand } } : {},
        ],
      },
      orderBy: { [sortBy]: order },
      take: limit,
      skip,
    });
  }
  

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({ where: { id }, data: updateProductDto });
  }

  async remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }
}
