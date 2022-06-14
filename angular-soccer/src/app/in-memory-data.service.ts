import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Player} from './players/players';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const players = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' }
    
    ];
    return {players};
  }
  constructor() { }
  genId(players: Player[]): number {
    return players.length > 0 ? Math.max(...players.map(player => player.id)) + 1 : 11;
}
}