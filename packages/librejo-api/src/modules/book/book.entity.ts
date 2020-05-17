import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsOptional } from 'class-validator';
import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsUnique } from '@/helpers/is-unique.validator';

const { CREATE } = CrudValidationGroups;

@Entity()
export class Book {
  @ApiProperty()
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiResponseProperty()
  @CreateDateColumn()
  createdAt?: Date;

  @ApiResponseProperty()
  @UpdateDateColumn()
  updatedAt?: Date;

  @ApiProperty()
  @IsUnique({ table: 'book', column: 'externalId' }, { message: 'externalId $value already exists', groups: [CREATE] })
  @Column('varchar', { unique: true })
  externalId: string;

  @ApiResponseProperty()
  @Column('varchar')
  userId: string;

  @ApiResponseProperty()
  @Column('varchar')
  title: string;

  @ApiResponseProperty()
  @Column('simple-array')
  authors: string[];

  @ApiResponseProperty()
  @Column('varchar')
  thumbnail: string;
}
