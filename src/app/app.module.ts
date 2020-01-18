import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdleDetectDirective } from './directives/idle-detect.directive';
import { IdleDetectService } from './services/idle-detect.service';
import { SessionExpiredComponent } from './components/session-expired/session-expired.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    IdleDetectDirective,
    SessionExpiredComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [IdleDetectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
