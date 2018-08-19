import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-battle-board-table',
  templateUrl: './battle-board-table.component.html',
  styleUrls: ['./battle-board-table.component.css']
})
export class BattleBoardTableComponent implements OnInit {
  //get the each information of the grid and pass to other component
  @Input()
  state: string;
  constructor() { }

  ngOnInit() {
  }

}
