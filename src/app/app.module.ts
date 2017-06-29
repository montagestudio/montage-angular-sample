import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Load Montage
import { Montage } from 'montage';
console.log(Montage)

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
