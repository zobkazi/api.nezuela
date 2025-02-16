// src/post/post.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/create-post.dto';
import { ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';


@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // Create Post
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  // Get All Posts with Pagination, Sorting, Filtering, and Search
  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiQuery({ name: 'category', required: false, type: String })
  @ApiQuery({ name: 'tags', required: false, isArray: true, type: String })
  @ApiQuery({ name: 'sortBy', required: false, enum: ['asc', 'desc'] })
  async findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('search') search?: string,
    @Query('category') category?: string,
    @Query('tags') tags?: string,
    @Query('sortBy') sortBy?: 'asc' | 'desc',
  ) {
    return this.postService.findAll({
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
      search,
      category,
      tags: tags ? tags.split(',') : undefined,
      sortBy,
    });
  }

  // Get One Post by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postService.findOne(Number(id));
    if (!post) {
      throw new Error(`Post not found`);
    }
    return post;
  }

  // Update Post
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(Number(id), updatePostDto);
  }

  // Delete Post
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.postService.delete(Number(id));
  }
}
