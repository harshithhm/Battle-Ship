import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-rocket-launcher',
  templateUrl: './rocket-launcher.component.html',
  styleUrls: ['./rocket-launcher.component.css']
})
export class RocketLauncherComponent implements OnInit {
  @Output() rocketlaunched = new EventEmitter<{launchedlocation: number}>();

  constructor() { }

  ngOnInit() {
  }
  //pass the launched grid value to the other component
  setClickedRow(poistionSelected){
  this.rocketlaunched.emit({
  launchedlocation: poistionSelected

});
  }
 
}
