import { Address } from './address';

export class User {

    readonly userId: string;
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

    constructor() {
    }
}
