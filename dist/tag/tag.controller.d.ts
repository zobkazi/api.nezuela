import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    create(createTagDto: CreateTagDto): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        slug: string;
    }[]>;
    findOne(id: string): Promise<{
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
