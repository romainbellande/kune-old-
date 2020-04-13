export default interface AccessToken {
  expiresAt: number;
  tokenType: string;
  scopes: string[];
  authorizeUrl: string;
  userinfoUrl: string;
  accessToken: string;
}
