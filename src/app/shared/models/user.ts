import { Address } from './address';
import { Role } from './role';

export class User {

    readonly id: string;
    firstName: string;
    lastName: string;
    birthDay: Date;
    mail: string;
    password: string;
    phone: string;
    permitNum: string;
    address: Address;
    creationDate: string;
    modificationDate: string;
    token?: string;
    roles: Role[];

    constructor() {
    }
}
