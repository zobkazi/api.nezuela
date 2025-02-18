import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createOrderDto: CreateOrderDto): Promise<{
        id: number;
        userId: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        user: {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
            profileImages: string | null;
            bio: string | null;
            link: string | null;
            role: import(".prisma/client").$Enums.Role;
        };
        orderItems: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            orderId: number;
            productId: number;
            quantity: number;
            price: import("@prisma/client/runtime/library").Decimal;
        }[];
    } & {
        id: number;
        userId: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<{
        orderItems: ({
            product: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                price: import("@prisma/client/runtime/library").Decimal;
                description: string;
                discountPercentage: number;
                rating: number;
                stock: number;
                brand: string;
                thumbnail: string;
                images: string[];
            };
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            orderId: number;
            productId: number;
            quantity: number;
            price: import("@prisma/client/runtime/library").Decimal;
        })[];
    } & {
        id: number;
        userId: number;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
