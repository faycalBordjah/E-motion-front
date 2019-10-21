import { Adress } from './adress';

export class User {

    readonly userId: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    mail: string;
    password: string;
    phone: string;
    permitNum: string;
    adress: Adress;
    creationDate: string;
    modificationDate: string;

    constructor() {
    }
}
