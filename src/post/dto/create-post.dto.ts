// create-post.dto.ts
export class CreatePostDto {
  title: string;
  slug: string;
  content?: string;
  excerpt?: string;
  coverImage?: string;
  authorId: number;
  categoryIds: number[];
  tagIds: number[];
}
