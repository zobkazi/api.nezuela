import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<{
        id: number;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(query: {
        page?: number;
        limit?: number;
        sortBy?: string;
        order?: 'asc' | 'desc';
        search?: string;
        minPrice?: number;
        maxPrice?: number;
        brand?: string;
    }): Promise<{
        id: number;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<{
        id: number;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
}
