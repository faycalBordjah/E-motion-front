import { Role } from './role';

export class LoginResponse {

  currentUserId: string;
  roles: Role;
  iat: string;
  exp: string;

  constructor() {}
}
