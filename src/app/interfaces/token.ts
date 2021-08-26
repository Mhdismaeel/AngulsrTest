export interface Token {
  Message:string;
  IsAuthenticated:boolean;
  Email:string;
  RefreshToken:string;
  RefreshTokenExpiration:string;
  Roles:string[];
  Token:string;
  UserName:string;
}
