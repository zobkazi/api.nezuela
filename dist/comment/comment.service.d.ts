import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(CreateCommentDto: CreateCommentDto): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
        userId: number;
    }>;
    findAll(): Promise<({
        post: {
            id: number;
            title: string;
            content: string | null;
            slug: string;
            authorId: number;
            coverImage: string | null;
            excerpt: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
        userId: number;
    })[]>;
    findOne(id: number): Promise<{
        post: {
            id: number;
            title: string;
            content: string | null;
            slug: string;
            authorId: number;
            coverImage: string | null;
            excerpt: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
        userId: number;
    }>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
        userId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
        userId: number;
    }>;
}
