// src/product/product.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
findAll(
  @Query('page') page?: number,
  @Query('limit') limit?: number,
  @Query('sortBy') sortBy?: string,
  @Query('order') order?: 'asc' | 'desc',
  @Query('search') search?: string,
  @Query('minPrice') minPrice?: number,
  @Query('maxPrice') maxPrice?: number,
  @Query('brand') brand?: string
) {
  return this.productService.findAll({
    page: Number(page) || 1,
    limit: Number(limit) || 10,
    sortBy,
    order,
    search,
    minPrice: Number(minPrice),
    maxPrice: Number(maxPrice),
    brand,
  });
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}