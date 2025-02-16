import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
    findAll(): Promise<({
        posts: {
            categoryId: number;
            postId: number;
        }[];
    } & {
        id: number;
        name: string;
        slug: string;
    })[]>;
    findOne(id: number): Promise<{
        posts: {
            categoryId: number;
            postId: number;
        }[];
    } & {
        id: number;
        name: string;
        slug: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
}
