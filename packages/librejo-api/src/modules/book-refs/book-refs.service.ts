import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { BookRef } from './book-ref.entity';

@Injectable()
export class BookRefsService extends TypeOrmCrudService<BookRef> {
  constructor(@InjectRepository(BookRef) repo) {
    super(repo);
  }
}
