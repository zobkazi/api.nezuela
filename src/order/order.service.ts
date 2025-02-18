import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: {
        userId: createOrderDto.userId,
        status: createOrderDto.status,
        totalAmount: 0, // Initially set to 0, updated later when items are added
      },
    });
  }

  async findAll() {
    return this.prisma.order.findMany({
      include: { orderItems: true, user: true },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: { orderItems: { include: { product: true } } },
    });

    if (!order) throw new NotFoundException('Order not found');
    return order;
  }
}
