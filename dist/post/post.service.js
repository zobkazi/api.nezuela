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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PostService = class PostService {
    findOne(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const existingPost = await this.prisma.post.findUnique({
            where: { slug: data.slug },
        });
        if (existingPost) {
            throw new common_1.ConflictException('Post already exists');
        }
        return this.prisma.post.create({
            data: {
                title: data.title,
                content: data.content,
                slug: data.slug,
                author: {
                    connect: { id: data.authorId },
                },
                categories: {
                    create: data.categoryId
                        ? [{ category: { connect: { id: data.categoryId } } }]
                        : [],
                },
                tags: {
                    create: data.tags
                        ? data.tags.map((tagId) => ({
                            tag: { connect: { id: parseInt(tagId) } },
                        }))
                        : [],
                },
            },
            include: {
                categories: {
                    include: {
                        category: true,
                    },
                },
                tags: {
                    include: {
                        tag: true,
                    },
                },
            },
        });
    }
    async findAll(query) {
        const { page = 1, limit = 10, search, category, tags, sortBy = 'desc', } = query;
        const skip = (page - 1) * limit;
        const where = {
            AND: [
                search
                    ? {
                        OR: [
                            { title: { contains: search, mode: 'insensitive' } },
                            { content: { contains: search, mode: 'insensitive' } },
                        ],
                    }
                    : undefined,
                category
                    ? {
                        categories: {
                            some: {
                                category: {
                                    name: { equals: category, mode: 'insensitive' },
                                },
                            },
                        },
                    }
                    : undefined,
                tags?.length
                    ? {
                        tags: {
                            some: {
                                tag: {
                                    name: { in: tags },
                                },
                            },
                        },
                    }
                    : undefined,
            ].filter(Boolean),
        };
        const [posts, total] = await Promise.all([
            this.prisma.post.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: sortBy },
                include: {
                    categories: {
                        include: {
                            category: true,
                        },
                    },
                    tags: {
                        include: {
                            tag: true,
                        },
                    },
                },
            }),
            this.prisma.post.count({ where }),
        ]);
        return { posts, total };
    }
    async update(id, data) {
        const updateData = {
            title: data.title,
            content: data.content,
            slug: data.slug,
            coverImage: data.coverImage,
            excerpt: data.excerpt
        };
        if (data.categoryId) {
            updateData.categories = {
                deleteMany: {},
                create: [{ category: { connect: { id: data.categoryId } } }],
            };
        }
        if (data.tags) {
            updateData.tags = {
                deleteMany: {},
                create: data.tags.map((tagId) => ({
                    tag: { connect: { id: parseInt(tagId) } },
                })),
            };
        }
        return this.prisma.post.update({
            where: { id },
            data: updateData,
        });
    }
    async delete(id) {
        return this.prisma.post.delete({
            where: { id },
        });
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PostService);
//# sourceMappingURL=post.service.js.map