import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
    }>;
    findAll(page?: number, limit?: number, sortBy?: string, order?: 'asc' | 'desc', search?: string, minPrice?: number, maxPrice?: number, brand?: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        thumbnail: string;
        images: string[];
    }>;
}
