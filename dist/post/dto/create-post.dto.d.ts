export declare class CreatePostDto {
    title: string;
    content: string;
    slug: string;
    authorId: number;
    categoryId: number;
    tags?: string[];
}
export declare class UpdatePostDto {
    title?: string;
    content?: string;
    slug?: string;
    categoryId?: number;
    tags?: string[];
    coverImage?: string;
    excerpt?: string;
}
