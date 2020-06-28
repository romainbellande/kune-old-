import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { BookRefsController } from './book-refs.controller';
import { Logger } from '@/services/logger.service';
import { BookRef } from './book-ref.entity';
import { MockRepository } from '@/helpers/testing/mock-repository';
import { BookRefsService } from './book-refs.service';

describe('BookRefs Controller', () => {
  let controller: BookRefsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookRefsController],
      providers: [
        BookRefsService,
        Logger,
        {
          provide: getRepositoryToken(BookRef),
          useValue: new MockRepository(),
        },
      ],
    }).compile();

    controller = module.get<BookRefsController>(BookRefsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
