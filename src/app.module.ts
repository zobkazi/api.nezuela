import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { TagModule } from './tag/tag.module';
import { CategoryModule } from './category/category.module';
import {ThrottlerModule} from '@nestjs/throttler'


@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    PostModule,
    CommentModule,
    TagModule,
    CategoryModule,
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
