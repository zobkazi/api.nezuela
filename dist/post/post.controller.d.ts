import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        authorId: number;
        coverImage: string | null;
    }>;
    findAll(page?: string, limit?: string, search?: string, category?: string, tags?: string, sortBy?: 'asc' | 'desc'): Promise<{
        posts: import(".prisma/client").Post[];
        total: number;
    }>;
    findOne(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        authorId: number;
        coverImage: string | null;
    }>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        authorId: number;
        coverImage: string | null;
    }>;
    delete(id: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        authorId: number;
        coverImage: string | null;
    }>;
}
