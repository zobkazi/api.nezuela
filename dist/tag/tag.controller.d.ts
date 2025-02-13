import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    create(createTagDto: CreateTagDto): Promise<{
        name: string;
        id: number;
        slug: string;
    }>;
    findAll(): Promise<{
        name: string;
        id: number;
        slug: string;
    }[]>;
    findOne(id: string): Promise<{
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
