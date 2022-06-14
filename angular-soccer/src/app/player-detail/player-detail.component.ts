import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../players/players';
import { PlayerService } from '../players/player.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  player: Player | undefined;

  constructor(private playerService: PlayerService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
this.getPlayer();

  }
  getPlayer() {
 const id = Number(this.route.snapshot.paramMap.get('id'));

 this.playerService.getPlayer(id)
 
 .subscribe(p => this.player = p);

  }
goBack(): void {
  this.location.back();

}
save(): void {
  if (this.player) {
    this.playerService.updatePlayer(this.player)
    .subscribe(() => this.goBack());
  }
}


}
