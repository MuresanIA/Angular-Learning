import { Component, OnInit } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-game-controller',
  templateUrl: './game-controller.component.html',
  styleUrls: ['./game-controller.component.css'],
})
export class GameControllerComponent implements OnInit {
  intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
}
