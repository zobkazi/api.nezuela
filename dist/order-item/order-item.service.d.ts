import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
export declare class OrderItemService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createOrderItemDto: CreateOrderItemDto): Promise<{
        id: number;
        orderId: number;
        productId: number;
        quantity: number;
        price: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        order: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            totalAmount: import("@prisma/client/runtime/library").Decimal;
            status: import(".prisma/client").$Enums.OrderStatus;
        };
        product: {
            id: number;
            price: import("@prisma/client/runtime/library").Decimal;
            createdAt: Date;
            updatedAt: Date;
            name: string;
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
        orderId: number;
        productId: number;
        quantity: number;
        price: import("@prisma/client/runtime/library").Decimal;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
}
