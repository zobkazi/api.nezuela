import { PrismaService } from '../prisma/prisma.service';
import { Post } from '@prisma/client';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';
export declare class PostService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreatePostDto): Promise<Post>;
    findAll(query: {
        page?: number;
        limit?: number;
        search?: string;
        category?: string;
        tags?: string[];
        sortBy?: 'asc' | 'desc';
    }): Promise<{
        posts: Post[];
        total: number;
    }>;
    findOne(id: number): Promise<Post>;
    update(id: number, data: UpdatePostDto): Promise<Post>;
    delete(id: number): Promise<Post>;
}
