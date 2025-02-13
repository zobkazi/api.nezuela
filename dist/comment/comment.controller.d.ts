import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/create-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<{
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
    findOne(id: string): Promise<{
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
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
        userId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        postId: number;
        userId: number;
    }>;
}
