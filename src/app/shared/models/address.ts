export class Address {

  readonly id: string;
  numberRoad: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;


  constructor(numberRoad: number, street: string, city: string, state: string, zipCode: string, country: string) {
    this.numberRoad = numberRoad;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zipCode;
    this.country = country;
  }
}
