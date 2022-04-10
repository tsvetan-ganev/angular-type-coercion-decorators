import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { ShortDateComponent } from './short-date.component';

@NgModule({
  declarations: [AppComponent, CounterComponent, ShortDateComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
