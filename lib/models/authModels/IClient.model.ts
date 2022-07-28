export interface IClientModel {
  [key: string]: any;

  id?: any;
  clientId: string;
  clientSecret?: string;
  redirectUris?: string[];
  grants: string[];
  accessTokenLifetime?: number;
  refreshTokenLifetime?: number;
}
