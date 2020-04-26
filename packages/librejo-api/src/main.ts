import './helpers/apm';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CrudConfigService } from '@nestjsx/crud';
import * as fastifyCookie from 'fastify-cookie';

CrudConfigService.load({
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    limit: 30,
    maxLimit: 30,
    alwaysPaginate: true,
  },
});

import { Config } from './config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from './services/logger.service';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({ logger: true }));

  app.useLogger(new Logger('neoark-api', true));
  app.register(fastifyCookie);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('v1');

  if (Config.IS_DEV) {
    const swaggerOptions = new DocumentBuilder()
      .setTitle('Neoark API')
      .setVersion('1.0')
      .addBearerAuth({ type: 'apiKey', in: 'header', name: 'Authorization' })
      .build();

    const document = SwaggerModule.createDocument(app, swaggerOptions);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(Config.PORT, '0.0.0.0');
}
bootstrap();
