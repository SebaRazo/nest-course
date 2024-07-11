import { Car } from './../../cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla Cross',
  },
  {
    id: uuid(),
    brand: 'Lexus',
    model: 'RX 350',
  },
];
