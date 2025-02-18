// src/product/dto/create-product.dto.ts
import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsNumber()
  discountPercentage: number;

  @IsNumber()
  rating: number;

  @IsNumber()
  stock: number;

  @IsString()
  brand: string;

  @IsString()
  thumbnail: string;

  @IsArray()
  images: string[];
}