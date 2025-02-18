import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(CreateCommentDto: CreateCommentDto): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        postId: number;
        userId: number;
    }>;
    findAll(): Promise<({
        post: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            slug: string;
            content: string | null;
            excerpt: string | null;
            authorId: number;
            coverImage: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        content: string;
        postId: number;
        userId: number;
    })[]>;
    findOne(id: number): Promise<{
        post: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            slug: string;
            content: string | null;
            excerpt: string | null;
            authorId: number;
            coverImage: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        content: string;
        postId: number;
        userId: number;
    }>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        postId: number;
        userId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        postId: number;
        userId: number;
    }>;
}
