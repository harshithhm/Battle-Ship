import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BattleBoardComponent } from './battle-ground/battle-board/battle-board.component';
import { BattleBoardTableComponent } from './battle-ground/battle-board-table/battle-board-table.component';
import { RocketLauncherComponent } from './rocket-launcher/rocket-launcher.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { AlertsModule } from 'angular-alert-module';
import { OnlinePlayerComponent } from './online-player/online-player.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleBoardComponent,
    BattleBoardTableComponent,
    RocketLauncherComponent,
    ScoreboardComponent,
    OnlinePlayerComponent
  ],
  imports: [
    BrowserModule,
    AlertsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
