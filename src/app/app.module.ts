import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routerModule } from './app.routing';
import { AppComponent } from './app.component';
import { UnsplashModule } from './unsplash/unsplash.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routerModule,
    UnsplashModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
