import { PrismaService } from '../prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
export declare class TagService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        slug: string;
    }>;
}
