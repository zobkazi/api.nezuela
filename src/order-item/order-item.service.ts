import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';

@Injectable()
export class OrderItemService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    const product = await this.prisma.product.findUnique({
      where: { id: createOrderItemDto.productId },
    });

    if (!product) throw new NotFoundException('Product not found');

    const orderItem = await this.prisma.orderItem.create({
      data: {
        orderId: createOrderItemDto.orderId,
        productId: createOrderItemDto.productId,
        quantity: createOrderItemDto.quantity,
        price: product.price .toNumber() * createOrderItemDto.quantity,
      },
    });

    // Update total order price
    await this.prisma.order.update({
      where: { id: createOrderItemDto.orderId },
      data: {
        totalAmount: {
          increment: orderItem.price,
        },
      },
    });

    return orderItem;
  }

  async findAll() {
    return this.prisma.orderItem.findMany({
      include: { product: true, order: true },
    });
  }
}
