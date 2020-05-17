import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class EntityBase {
  @ApiProperty()
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
