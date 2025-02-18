import { IsNumber, IsEnum } from 'class-validator';
import { OrderStatus } from '@prisma/client';

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsEnum(OrderStatus)
  status: OrderStatus;
}
