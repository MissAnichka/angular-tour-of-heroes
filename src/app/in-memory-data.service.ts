import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Wonder Woman'},
      {id: 2, name: 'Jessica Lange'},
      {id: 3, name: 'Gina Rodriguez'},
      {id: 4, name: 'Yael Grobglas'},
      {id: 5, name: 'Phoenix'},
      {id: 6, name: 'Xena'},
      {id: 7, name: 'Storm'},
      {id: 8, name: 'Kamala Khan'},
      {id: 9, name: 'Oprah'},
      {id: 10, name: 'Emma Watson'}
    ];
    return {heroes};
  }
}
