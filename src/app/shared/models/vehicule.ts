export class Vehicule {

  readonly idVehicule: string;
  model: string;
  mark: string;
  type: string;
  categorie: string;
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
