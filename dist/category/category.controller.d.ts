import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
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
    findOne(id: string): Promise<{
        posts: {
            categoryId: number;
            postId: number;
        }[];
    } & {
        id: number;
        name: string;
        slug: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
}
