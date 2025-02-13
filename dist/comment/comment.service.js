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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CommentService = class CommentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(CreateCommentDto) {
        const existingComment = await this.prisma.comment.findFirst({
            where: { content: CreateCommentDto.content },
        });
        if (existingComment) {
            throw new common_1.ConflictException('Tag already exists');
        }
        return this.prisma.comment.create({
            data: {
                content: CreateCommentDto.content,
                postId: CreateCommentDto.postId,
                userId: CreateCommentDto.userId,
            },
        });
    }
    async findAll() {
        return this.prisma.comment.findMany({
            include: {
                post: true,
            },
        });
    }
    async findOne(id) {
        const comment = await this.prisma.comment.findUnique({
            where: { id },
            include: { post: true },
        });
        if (!comment)
            throw new common_1.NotFoundException('Comment not found');
        return comment;
    }
    async update(id, updateCommentDto) {
        const existingComment = await this.prisma.comment.findUnique({
            where: { id },
        });
        if (!existingComment) {
            throw new common_1.NotFoundException(`Comment with ID ${id} not found`);
        }
        if (updateCommentDto.content) {
            const duplicateComment = await this.prisma.comment.findFirst({
                where: {
                    content: updateCommentDto.content,
                    id: { not: id },
                },
            });
            if (duplicateComment) {
                throw new common_1.ConflictException('A comment with this content already exists');
            }
        }
        return this.prisma.comment.update({
            where: { id },
            data: updateCommentDto,
        });
    }
    async remove(id) {
        return this.prisma.comment.delete({ where: { id } });
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommentService);
//# sourceMappingURL=comment.service.js.map