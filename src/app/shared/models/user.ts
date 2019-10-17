export class User {

    readonly userId: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    roadNumber: number;
    street: string;
    town: string;
    zipCode: number;
    phone: string;
    mail: string;
    password: string;
    permitNum: string;
    token?: string;
    role: string;

    constructor() {
    }
}
