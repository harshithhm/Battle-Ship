import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BattleShip Game';
  Player1 : string = "Player1"
  Player2 : string = "Player2"
}
