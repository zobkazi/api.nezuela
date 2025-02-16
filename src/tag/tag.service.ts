import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto) {
    // Check if tags already exists

    // Check if tags already exist
    const existingTag = await this.prisma.tag.findUnique({
      where: { name: createTagDto.name },
    });
    if (existingTag) {
      throw new ConflictException('Tag already exists');
    }

    return this.prisma.tag.create({
      data: {
        name: createTagDto.name,
        slug: createTagDto.name.toLowerCase().replace(/\s+/g, '-'),
      },
    });
  }

  async findAll() {
    return this.prisma.tag.findMany();
  }

  async findOne(id: number) {
    const tag = await this.prisma.tag.findUnique({
      where: { id },
    });
    if (!tag) throw new NotFoundException('Tag not found');
    return tag;
  }

  async remove(id: number) {
    return this.prisma.tag.delete({ where: { id } });
  }
}
