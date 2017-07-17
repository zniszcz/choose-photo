import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsplashService } from './unsplash.service';
import { NewsListComponent } from './news-list.component';
import { routerModule } from './unsplash.routing';

@NgModule({
  imports: [
    CommonModule,
    routerModule,
  ],
  declarations: [
    NewsListComponent,
  ],
  exports: [
    NewsListComponent,
  ],
  providers: [
    UnsplashService,
  ],
})
export class UnsplashModule { }
