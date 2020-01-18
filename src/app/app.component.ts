import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IdleDetectService } from './services/idle-detect.service';

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
    console.log('onInit');
    
    this.idleDetectService.startTimer(5000);

    this.idleDetectService.watcher().subscribe((res) => {
      if( res ) {
        console.log('Is session expired? ', res)
        if(confirm('Your session has expired.')) {
          this.router.navigateByUrl('/sessionExpired');
        }
      }
    });
  }
}
