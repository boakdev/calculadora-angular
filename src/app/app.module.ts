import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcModule } from './calc';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
