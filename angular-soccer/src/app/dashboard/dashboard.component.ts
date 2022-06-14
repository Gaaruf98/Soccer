import { Component, OnInit } from '@angular/core';
import { Player } from '../players/players';
import { PlayerService } from '../players/player.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  players: Player[] = [];

  constructor(private PlayerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }
  getPlayers(): void {
    this.PlayerService.getPlayers()
      .subscribe(players => this.players = players.slice(1, 5));
  }
}


