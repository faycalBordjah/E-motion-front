export class Vehicle {

  readonly vehicleId: string;
  model: string;
  brand: string;
  type: string;
  category: string;
  color: string;
  serialNumber: string;
  registering: string;
  available: boolean;
  purchaseDate: Date;
  purchasePrice: number;
  placeNumber: number;
  kilometers: number;
  state: string[];

  constructor() {}
}
