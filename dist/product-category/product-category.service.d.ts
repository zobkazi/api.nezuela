import { PrismaService } from '../prisma/prisma.service';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
export declare class ProductCategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateProductCategoryDto): Promise<{
        id: number;
        name: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        products: {
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
        }[];
    } & {
        id: number;
        name: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        products: {
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
        }[];
    } & {
        id: number;
        name: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
