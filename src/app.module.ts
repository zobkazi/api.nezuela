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
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { OrderItemModule } from './order-item/order-item.module';
import { OrderModule } from './order/order.module';


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
    ProductModule,
    ProductCategoryModule,
    OrderItemModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
