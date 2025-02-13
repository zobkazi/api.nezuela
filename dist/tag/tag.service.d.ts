import { PrismaService } from '../prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
export declare class TagService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        name: string;
        id: number;
        slug: string;
    }>;
    remove(id: number): Promise<{
        name: string;
        id: number;
        slug: string;
    }>;
}
