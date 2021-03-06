import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routerModule } from './app.routing';
import { AppComponent } from './app.component';
import { UnsplashModule } from './unsplash/unsplash.module';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
  ],
  imports: [
    BrowserModule,
    routerModule,
    UnsplashModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
