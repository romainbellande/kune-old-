import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Logger } from '@/services/logger.service';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { BookRef } from '../book-refs/book-ref.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, BookRef])],
  controllers: [BookController],
  providers: [Logger, BookService],
})
export class BookModule {}
