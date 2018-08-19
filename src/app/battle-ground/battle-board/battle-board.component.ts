import { Component, OnInit,Input,AfterContentInit} from '@angular/core';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-battle-board',
  templateUrl: './battle-board.component.html',
  styleUrls: ['./battle-board.component.css']
})
export class BattleBoardComponent implements AfterContentInit{
rocketsArray:number[]=[];

  constructor(private alerts: AlertsService) { 
     }
  @Input()
  playerName1 : string; 
  @Input()
  playerName2 : string; 
  squares = Array(9).fill(null);
  player:string = '<-|->';
  missedTarget:string='X';
  winner:string = '';

  //Message to users after dom rendering.
  ngAfterContentInit() {
    this.alerts.setMessage('Players please place two missles','warn');
   }
   //Handling the movement after launch
  handleMove(position,playerName) {
    if(!this.winner && !this.squares[position] ){
      this.squares[position] = this.missedTarget;
      this.alerts.setMessage('Target Missed  '+  playerName,'error');

    }
    if(this.squares[position]==this.player){
      this.squares[position]="Dead";
      if(this.squares.filter(function(x){ return x === "<-|->"; }).length==0){
        this.alerts.setMessage('You win  '+  playerName,'success');
      }
    }

  }
  //Players need to place the on board before game starts
  placeRockets(position) {
    if(!this.squares[position]){
      if(this.rocketsArray.length<2){
        this.squares[position] = this.player;
        this.rocketsArray.push(this.squares[position]);  
          }
          else{
            this.alerts.
            setMessage('You have already placed two missles','warn');
          
          }
     
    }
  }
  onrocketlaunched(recievedLaunchPpoint: number,playerName:string){
    if(this.rocketsArray.length>1){ 
this.handleMove(recievedLaunchPpoint["launchedlocation"],playerName);
    }
    else{
      this.alerts.
      setMessage('Please place 2 missels first','warn');  
    }
}


  restartGame() {
    this.squares = Array(9).fill(null); 
    this.rocketsArray=[];
  }
  
}
