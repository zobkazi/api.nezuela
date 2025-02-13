import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        name: string;
        id: number;
        slug: string;
    }>;
    findAll(): Promise<({
        posts: {
            categoryId: number;
            postId: number;
        }[];
    } & {
        name: string;
        id: number;
        slug: string;
    })[]>;
    findOne(id: number): Promise<{
        posts: {
            categoryId: number;
            postId: number;
        }[];
    } & {
        name: string;
        id: number;
        slug: string;
    }>;
    remove(id: number): Promise<{
        name: string;
        id: number;
        slug: string;
    }>;
}
