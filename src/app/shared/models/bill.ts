export class Bill {
    readonly id: string;
    locationId: string;
    price: number;
    duration: number;
    kilometersStart: number;
    kilometersEnd: number;
    invoiceNumber: number;

    constructor() {
    }
}
