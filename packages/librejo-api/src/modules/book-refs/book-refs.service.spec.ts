import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { MockRepository } from '@/helpers/testing/mock-repository';
import { BookRefsService } from './book-refs.service';
import { Book } from '../book/book.entity';
import { BookRef } from './book-ref.entity';

describe('BookRefsService', () => {
  let service: BookRefsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookRefsService,
        {
          provide: getRepositoryToken(BookRef),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    service = module.get<BookRefsService>(BookRefsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
