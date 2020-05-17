export interface JwtBody {
  ver: number;
  jti: string;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
  cid: string;
  uid: string;
  scp: string[];
  sub: string;
}

export interface JwtHeader {
  typ: string;
  alg: string;
  kid: string;
}

export interface Jwt {
  header: JwtHeader;
  claims: JwtBody;
  toString(): string;
}
