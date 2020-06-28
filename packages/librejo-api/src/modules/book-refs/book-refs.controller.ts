import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Config } from '@/config';
import { OktaAuthGuard } from '@/guards/okta-auth.guard';
import { BookRef } from './book-ref.entity';
import { BookRefsService } from './book-refs.service';

@UseGuards(OktaAuthGuard)
@Crud({
  model: { type: BookRef },
  query: {
    join: {
      book: {
        eager: true,
      },
    },
  },
})
@CrudAuth(Config.DEFAULT_CRUD_AUTH_OPTIONS)
@ApiBearerAuth()
@ApiTags('book-refs')
@Controller('book-refs')
export class BookRefsController {
  constructor(public service: BookRefsService) {}
}
