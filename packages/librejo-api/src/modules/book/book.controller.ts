import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController, CrudAuth } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { OktaAuthGuard } from '@/guards/okta-auth.guard';
import { Book } from './book.entity';
import { BookService } from './book.service';
import { Config } from '@/config';

@UseGuards(OktaAuthGuard)
@Crud({
  model: { type: Book },
})
@CrudAuth(Config.DEFAULT_CRUD_AUTH_OPTIONS)
@ApiBearerAuth()
@ApiTags('books')
@Controller('books')
export class BookController implements CrudController<Book> {
  constructor(public service: BookService) {}
}
