import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription, Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  currentSubscriptionTimer: Subscription;
  currentValueTimer = '';
  callSubscriptionTime: Subscription;
  callTimerOut;

  public disabledDates = (date: Date): boolean => {
    const currentDate = new Date(Date.now());
    if (currentDate.getFullYear() > date.getFullYear()) {
      return true;
    }
    else if (currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() > date.getMonth()){
      return true;
    }
    else if (currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() === date.getMonth()
              && currentDate.getDate() > date.getDate()) {
                return true;
              }
    else{
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    const observable: Observable<number> = interval(1000);
    this.currentSubscriptionTimer = observable.subscribe(v => {
      this.currentValueTimer = this.formatValue(v);
    });
  }

  private formatValue(v) {
    const minutes = Math.floor(v / 60);
    const formattedMinutes = '' + (minutes > 9 ? minutes : '0' + minutes);
    const seconds = v % 60;
    const formattedSeconds = '' + (seconds > 9 ? seconds : '0' + seconds);
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  stopTimer(){
    this.currentSubscriptionTimer.unsubscribe();
    this.currentValueTimer = '';
  }
}
