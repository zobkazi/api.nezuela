// post.controller.ts
import { Controller, Post, Body, Get, Param, Delete, Put, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  // Create Post
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
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('category') category?: string,
    @Query('tags') tags?: string[],
    @Query('sortBy') sortBy?: 'asc' | 'desc',
  ) {
    return this.postService.findAll({ page, limit, search, category, tags, sortBy });
  }

  // Get One Post by ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.postService.findOne(Number(id));
  }

  // Update Post
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(Number(id), updatePostDto);
  }

  // Delete Post
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.postService.delete(Number(id));
  }
}
