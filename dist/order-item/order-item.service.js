"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrderItemService = class OrderItemService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOrderItemDto) {
        const product = await this.prisma.product.findUnique({
            where: { id: createOrderItemDto.productId },
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        const orderItem = await this.prisma.orderItem.create({
            data: {
                orderId: createOrderItemDto.orderId,
                productId: createOrderItemDto.productId,
                quantity: createOrderItemDto.quantity,
                price: product.price.toNumber() * createOrderItemDto.quantity,
            },
        });
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
};
exports.OrderItemService = OrderItemService;
exports.OrderItemService = OrderItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderItemService);
//# sourceMappingURL=order-item.service.js.map