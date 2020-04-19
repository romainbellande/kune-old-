import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { oktaJwtVerifier } from '@/helpers/okta-jwt-verifier';
import { mapKeys } from 'lodash';

@Injectable()
export class WsAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const data = context.switchToWs().getData();
    const client = context.switchToWs().getClient();
    return this.validateRequest(client, data);
  }

  validateRequest(client: any, data: any = {}) {
    const normalizedHeaders = mapKeys(data?.headers || {}, (value, key) => key.toLowerCase());
    const authHeader = normalizedHeaders.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);

    if (!match) {
      return false;
    }

    const accessToken = match[1];

    return oktaJwtVerifier
      .verifyAccessToken(accessToken, `api://default`)
      .then(jwt => {
        data['uid'] = jwt.claims.uid;
        return true;
      })
      .catch(err => {
        return client.close(1008, err.message);
      });
  }
}
