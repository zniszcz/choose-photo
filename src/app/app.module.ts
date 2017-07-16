import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UnsplashModule } from './unsplash/unsplash.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UnsplashModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
