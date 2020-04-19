import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FastifyRequest } from 'fastify';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Config } from '@/config';
import { ServerResponse } from 'http';

import * as pkg from '../../package.json';

const getRequestInfo = (request: FastifyRequest): {} => {
  const { hostname, ip, headers, query, raw } = request;
  const { method, url } = raw;
  return {
    hostname,
    ip,
    headers,
    query,
    method,
    url,
  };
};

const getLevelFromStatusCode = (statusCode: number): 'info' | 'warning' | 'critical' => {
  if (statusCode >= 500) return 'critical';
  if (statusCode >= 400) return 'warning';
  return 'info';
};

const getDateFromTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}.${month}.${day}`;
};

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const http = context.switchToHttp();
    const request: FastifyRequest = http.getRequest();
    const response: ServerResponse = http.getResponse();
    const { statusCode, statusMessage } = response;

    const beginAt = Date.now();

    return next.handle().pipe(
      tap((data: any) => {
        const currentDate = new Date();
        const endAt: number = currentDate.getTime();
        const duration = endAt - beginAt;
        const body = {
          appVersion: pkg.version,
          level: getLevelFromStatusCode(statusCode),
          timestamp: endAt,
          date: currentDate,
          duration,
          request: getRequestInfo(request),
          response: {
            data,
            statusCode,
            statusMessage,
          },
        };

        console.log('Config.ELASTICSEARCH_NODE', Config.ELASTICSEARCH_NODE);
        if (Config.ELASTICSEARCH_NODE) {
          console.log('ok');
          this.elasticsearchService.index({
            index: `neoark-${getDateFromTimestamp(endAt)}`,
            body,
          });
        } else {
          console.log(body);
        }
      }),
    );
  }
}
