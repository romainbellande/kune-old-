import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { IsOptional } from 'class-validator';
import { ApiResponseProperty } from '@nestjs/swagger';

import { IsUnique } from '@/helpers/is-unique.validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { BookRef } from '../book-refs/book-ref.entity';

const { CREATE } = CrudValidationGroups;

@Entity()
export class Book {
  @ApiResponseProperty()
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiResponseProperty()
  @IsUnique({ table: 'book', column: 'externalId' }, { message: 'externalId $value already exists', groups: [CREATE] })
  @Column('varchar')
  externalId: string;

  @ApiResponseProperty()
  @Column('varchar')
  title: string;

  @ApiResponseProperty()
  @Column('simple-array')
  authors: string[];

  @ApiResponseProperty()
  @Column('varchar')
  thumbnail: string;

  @ApiResponseProperty()
  @OneToMany(
    () => BookRef,
    bookRef => bookRef.book,
  )
  refs: Promise<BookRef[]>;

  @ApiResponseProperty()
  @CreateDateColumn()
  createdAt?: Date;

  @ApiResponseProperty()
  @UpdateDateColumn()
  updatedAt?: Date;
}
