import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { MockRepository } from '@/helpers/testing/mock-repository';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { Logger } from '@/services/logger.service';

describe('Book Controller', () => {
  let controller: BookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [
        BookService,
        Logger,
        {
          provide: getRepositoryToken(Book),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    controller = module.get<BookController>(BookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
