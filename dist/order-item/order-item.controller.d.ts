import { OrderItemService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
export declare class OrderItemController {
    private readonly orderItemService;
    constructor(orderItemService: OrderItemService);
    create(createOrderItemDto: CreateOrderItemDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        orderId: number;
        productId: number;
        quantity: number;
    }>;
    findAll(): Promise<({
        product: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            price: import("@prisma/client/runtime/library").Decimal;
            discountPercentage: number;
            rating: number;
            stock: number;
            brand: string;
            thumbnail: string;
            images: string[];
        };
        order: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            totalAmount: import("@prisma/client/runtime/library").Decimal;
            status: import(".prisma/client").$Enums.OrderStatus;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        price: import("@prisma/client/runtime/library").Decimal;
        orderId: number;
        productId: number;
        quantity: number;
    })[]>;
}
