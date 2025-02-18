import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        success: boolean;
        data: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
        };
        message: string;
    }>;
    findAll(): Promise<{
        success: boolean;
        data: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
        }[];
        message: string;
    }>;
    findOne(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
        };
        message: string;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        success: boolean;
        data: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
        };
        message: string;
    }>;
    remove(id: string): Promise<{
        success: boolean;
        data: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
        };
        message: string;
    }>;
}
