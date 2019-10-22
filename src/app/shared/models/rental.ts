import { Vehicle } from './vehicle';
import { User } from './user';

export class Rental {

  readonly id: string;
  startDate: number;
  endDate: number;
  startTime: number;
  endTime: number;
  readonly user: User;
  readonly vehicle: Vehicle;
  status: string;

  constructor() {}
}
