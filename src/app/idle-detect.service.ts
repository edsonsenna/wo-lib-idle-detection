import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdleDetectService {

  private isSessionExpired = false;
  private timer = null;
  private timeInSeconds = 0;

  idleDetector: Subject<boolean>;

  constructor() { 
    this.idleDetector = new Subject();
  }

  startTimer(timeInSeconds: number) {

    console.log('Timer started to ', timeInSeconds, ' seconds...');

    this.timeInSeconds = timeInSeconds;

    this.timer = setTimeout(() => {
      console.log('Session Expired...');
      this.isSessionExpired = true;
      this.idleDetector.next(this.isSessionExpired);
    }, this.timeInSeconds);

    return this.idleDetector.asObservable();

  }

  resetTimer() {
    console.log('Restarting timeout...');
    this.isSessionExpired = false;
    clearTimeout(this.timer);
    this.startTimer(this.timeInSeconds);
  }

}
