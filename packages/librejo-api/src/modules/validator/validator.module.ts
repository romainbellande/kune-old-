import { Module } from '@nestjs/common';
import { IsUniqueValidator } from '@/helpers/is-unique.validator';

@Module({
  providers: [IsUniqueValidator],
})
export class ValidatorsModule {}
