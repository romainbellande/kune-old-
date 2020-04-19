import * as OktaJwtVerifier from '@okta/jwt-verifier';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FastifyRequest } from 'fastify';
import { oktaJwtVerifier } from '@/helpers/okta-jwt-verifier';

@Injectable()
export class OktaAuthGuard implements CanActivate {
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

    return oktaJwtVerifier
      .verifyAccessToken(accessToken, `api://default`)
      .then(jwt => {
        request['jwt'] = jwt;
        return true;
      })
      .catch(err => {
        return false;
      });
  }
}
