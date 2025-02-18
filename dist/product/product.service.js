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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        const existingProduct = await this.prisma.product.findUnique({
            where: { name: createProductDto.name }
        });
        if (existingProduct) {
            throw new common_1.ConflictException('Product already exists!');
        }
        return this.prisma.product.create({ data: createProductDto });
    }
    async findAll(query) {
        const { page = 1, limit = 10, sortBy = 'createdAt', order = 'desc', search, minPrice, maxPrice, brand, } = query;
        const skip = (page - 1) * limit;
        return this.prisma.product.findMany({
            where: {
                AND: [
                    search
                        ? {
                            OR: [
                                { name: { contains: search, mode: 'insensitive' } },
                                { description: { contains: search, mode: 'insensitive' } },
                            ],
                        }
                        : {},
                    minPrice ? { price: { gte: minPrice } } : {},
                    maxPrice ? { price: { lte: maxPrice } } : {},
                    brand ? { brand: { equals: brand } } : {},
                ],
            },
            orderBy: { [sortBy]: order },
            take: limit,
            skip,
        });
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async update(id, updateProductDto) {
        return this.prisma.product.update({ where: { id }, data: updateProductDto });
    }
    async remove(id) {
        return this.prisma.product.delete({ where: { id } });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map