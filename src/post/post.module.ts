import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaService } from '../prisma/prisma.service';
import {AuthModule} from '../auth/auth.module'

@Module({
  imports: [AuthModule],
  controllers: [PostController],
  providers: [PostService, PrismaService],
})
export class PostModule {}
