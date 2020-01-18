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

  watcher() {
    return this.idleDetector.asObservable();
  }

  startTimer(timeInSeconds: number) {

    console.log('Timeout timer started and will expire in ', timeInSeconds, ' seconds...');

    this.timeInSeconds = timeInSeconds;

    this.timer = setTimeout(() => {
      console.log('Session Expired...');
      this.isSessionExpired = true;
      this.idleDetector.next(this.isSessionExpired);
    }, this.timeInSeconds);

  }

  resetTimer() {

    if(!this.isSessionExpired) {

      console.log('Restarting timeout timer...');
      this.isSessionExpired = false;
      this.stopTimer();
      this.startTimer(this.timeInSeconds);
    }

  }

  stopTimer() {
    clearTimeout(this.timer);
  }

}
