import { Directive, HostListener } from '@angular/core';

import { IdleDetectService } from '../services/idle-detect.service';

@Directive({
  selector: 'div[idleDetect]'
})
export class IdleDetectDirective {

  constructor(
    private idleDetectService: IdleDetectService
  ) { }

  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    this.idleDetectService.resetTimer();
    console.log('keydown event detected...');
  }

  @HostListener('mousemove', ['$event'])
  onMove(event) {
    this.idleDetectService.resetTimer();
    console.log('mousemove event detected....');
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    this.idleDetectService.resetTimer();
    console.log('click event detected...');
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenuClick(event) {
    this.idleDetectService.resetTimer();
    console.log('contextmenu event detected...');
  }

  @HostListener('wheel', ['$event'])
  onWheelClick(event) {
    this.idleDetectService.resetTimer();
    console.log('wheel event detected...');
  }

}
