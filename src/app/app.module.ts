import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { StddevComponent } from './stddev/stddev.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    StddevComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
