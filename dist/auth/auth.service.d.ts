import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        success: boolean;
        data: {
            access_token: string;
            user: {
                id: number;
                email: string;
                role: import(".prisma/client").$Enums.Role;
            };
        };
        message: string;
    }>;
}
