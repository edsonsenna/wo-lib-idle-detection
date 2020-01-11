import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IdleDetectService } from './idle-detect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wo-lib';

  constructor(
    private idleDetectService: IdleDetectService,
    private router: Router
  ) {}

  ngOnInit() {
    this.idleDetectService.startTimer(5000).subscribe((res) => {
      console.log('Is session expired? ', res)
      this.router.navigateByUrl('/sessionExpired');
    });
  }
}
