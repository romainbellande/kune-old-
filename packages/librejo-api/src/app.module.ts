import { Module } from '@nestjs/common';
import { ConsoleModule } from 'nestjs-console';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Config } from './config';
import { CommandsModule } from './commands/commands.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { Logger } from './services/logger.service';
import { HealthModule } from './modules/health/health.module';
import { BookModule } from './modules/book/book.module';
import { Book } from './modules/book/book.entity';
import { BookRefsModule } from './modules/book-refs/book-refs.module';
import { BookRef } from './modules/book-refs/book-ref.entity';

const dynamicImports: any[] = [];
const dynamicProviders = [];

const dbParams: TypeOrmModuleOptions = {
  type: 'postgres',
  url: Config.DATABASE_URL,
  entities: [Book, BookRef],
  synchronize: Config.IS_DEV,
  dropSchema: Config.IS_DEV,
};

if (Config.ELASTICSEARCH_NODE) {
  dynamicImports.push(
    ElasticsearchModule.register({
      node: Config.ELASTICSEARCH_NODE,
    }),
  );

  dynamicProviders.push({
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  });
}

@Module({
  imports: [
    TypeOrmModule.forRoot(dbParams),
    ...dynamicImports,
    ConsoleModule,
    CommandsModule,
    HealthModule,
    BookModule,
    BookRefsModule,
  ],
  controllers: [],
  providers: [Logger, ...dynamicProviders],
  exports: [CommandsModule],
})
export class AppModule {}
