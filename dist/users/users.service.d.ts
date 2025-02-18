import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: number): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findByEmail(email: string): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    } | null>;
    create(data: CreateUserDto): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
    findAll(): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }[]>;
    findOne(id: number): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
    update(id: number, data: UpdateUserDto): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
    remove(id: number): Promise<{
        firstName: string;
        lastName: string;
        email: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
