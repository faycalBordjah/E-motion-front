import { Role } from './role';

export class LoginResponse {

  sub: string;
  roles: Role;
  iat: string;
  exp: string;

  constructor() {}
}
