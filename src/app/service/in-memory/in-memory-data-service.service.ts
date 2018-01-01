import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	constructor() { }

  createDb() {
    const heroes = [
      { id: 21, name: 'Jonas' },
		  { id: 22, name: 'Limsi' },
		  { id: 23, name: 'Arnaldo' },
		  { id: 24, name: 'Curies' },
		  { id: 25, name: 'Fonsi' },
		  { id: 26, name: 'Sizzer' }
    ];
    return {heroes};
  }
}