import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { IsOptional } from 'class-validator';
import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { Book } from '../book/book.entity';

@Entity()
export class BookRef {
  @ApiResponseProperty()
  @IsOptional({ always: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @ManyToOne(
    () => Book,
    book => book.refs,
  )
  book: Promise<Book>;

  @ApiProperty()
  @Column('varchar')
  userId: string;

  @ApiResponseProperty()
  @CreateDateColumn()
  createdAt?: Date;

  @ApiResponseProperty()
  @UpdateDateColumn()
  updatedAt?: Date;
}
