import { Module } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';

import { ListService } from './list.service';

@Module({
  imports: [ConsoleModule, ListService],
  controllers: [],
  providers: [],
  exports: [ListService],
})
export class CommandsModule {}
