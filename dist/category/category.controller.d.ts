import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        name: string;
        id: number;
        slug: string;
    }>;
    findAll(): Promise<({
        posts: {
            categoryId: number;
            postId: number;
        }[];
    } & {
        name: string;
        id: number;
        slug: string;
    })[]>;
    findOne(id: string): Promise<{
        posts: {
            categoryId: number;
            postId: number;
        }[];
    } & {
        name: string;
        id: number;
        slug: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: number;
        slug: string;
    }>;
}
