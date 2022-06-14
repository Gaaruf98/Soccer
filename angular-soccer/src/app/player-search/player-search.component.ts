import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Player } from '../players/players';
import { PlayerService } from '../players/player.service';
@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {
  players$!: Observable<Player[]>;
  private searchTerms = new Subject<string>();
  constructor(private PlayerService: PlayerService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }


  ngOnInit(): void {
    this.players$ = this.searchTerms.pipe(debounceTime(300),

    distinctUntilChanged(),
    switchMap((term: string) => this.PlayerService.searchPlayer(term)),
    );

  }

}
