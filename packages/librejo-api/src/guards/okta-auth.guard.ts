import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FastifyRequest } from 'fastify';
import { oktaJwtVerifier } from '@/helpers/okta-jwt-verifier';
import { Jwt } from './jwt.interface';
import { Logger } from '@/services/logger.service';

@Injectable()
export class OktaAuthGuard implements CanActivate {
  constructor(private logger: Logger) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  validateRequest(request: FastifyRequest) {
    const authHeader = request.headers.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);

    if (!match) {
      return false;
    }

    const accessToken = match[1];
    console.log('accessToken', accessToken);

    return oktaJwtVerifier
      .verifyAccessToken(accessToken, `api://default`)
      .then((jwt: Jwt) => {
        request['jwt'] = jwt;
        request['uuid'] = jwt.claims.uid;
        return true;
      })
      .catch(err => {
        this.logger.error(err);
        return false;
      });
  }
}
