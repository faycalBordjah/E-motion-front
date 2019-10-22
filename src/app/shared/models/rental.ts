import { Vehicle } from './vehicle';
import { User } from './user';

export class Rental {

  readonly locationId: string;
  startDate: number;
  endDate: number;
  startTime: number;
  endTime: number;
  readonly user: User;
  readonly vehicle: Vehicle;
  state: string[];

  constructor() {}
}
