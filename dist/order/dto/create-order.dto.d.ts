import { OrderStatus } from '@prisma/client';
export declare class CreateOrderDto {
    userId: number;
    status: OrderStatus;
}
