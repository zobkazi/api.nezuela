import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
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
