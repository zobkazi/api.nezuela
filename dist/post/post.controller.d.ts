import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<{
        id: number;
        title: string;
        content: string | null;
        slug: string;
        authorId: number;
        coverImage: string | null;
        excerpt: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(page?: string, limit?: string, search?: string, category?: string, tags?: string, sortBy?: 'asc' | 'desc'): Promise<{
        posts: import(".prisma/client").Post[];
        total: number;
    }>;
    findOne(id: string): Promise<void>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
        id: number;
        title: string;
        content: string | null;
        slug: string;
        authorId: number;
        coverImage: string | null;
        excerpt: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: number;
        title: string;
        content: string | null;
        slug: string;
        authorId: number;
        coverImage: string | null;
        excerpt: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
