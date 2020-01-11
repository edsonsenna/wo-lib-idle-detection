import { Directive, HostListener } from '@angular/core';

import { IdleDetectService } from './idle-detect.service';

@Directive({
  selector: 'div[idleDetect]'
})
export class IdleDetectDirective {

  constructor(
    private idleDetectService: IdleDetectService
  ) { }

  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    console.log(event);
  }

  @HostListener('mousemove', ['$event'])
  onMove(event) {
    this.idleDetectService.resetTimer();
    console.log(event);
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    console.log(event);
  }

}
