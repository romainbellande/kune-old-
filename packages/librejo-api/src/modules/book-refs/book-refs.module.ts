import { Module, Logger } from '@nestjs/common';
import { BookRefsController } from './book-refs.controller';
import { BookRefsService } from './book-refs.service';
import { BookRef } from './book-ref.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from '../book/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookRef, Book])],
  controllers: [BookRefsController],
  providers: [Logger, BookRefsService],
})
export class BookRefsModule {}
