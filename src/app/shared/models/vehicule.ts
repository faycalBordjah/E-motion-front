import { TypeVehicule } from './type-vehicule.enum';
import { CategorieVehicule } from './categorie-vehicule.enum';

export class Vehicule {
  readonly id: string;
  modele: string;
  marque: string;
  type: TypeVehicule;
  couleur: string;
  numSerie: string;
  immatriculation: string;
  disponible: boolean;
  dateAchat: Date;
  prixAchat: number;
  nbPlace: number;
  kilometrage: number;
  etat: string[];
  categorie: CategorieVehicule;
  constructor() {}
}
