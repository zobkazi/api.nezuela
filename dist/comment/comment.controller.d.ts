import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/create-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        postId: number;
        userId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        postId: number;
        userId: number;
    }>;
}
