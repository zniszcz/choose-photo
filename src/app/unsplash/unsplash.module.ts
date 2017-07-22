import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsplashService } from './unsplash.service';
import { routerModule } from './unsplash.routing';
import { NewsListComponent } from './news-list/news-list.component';
import { SearchListComponent } from './search-list/search-list.component';
import { PhotoThumbnailComponent } from './photo-thumbnail/photo-thumbnail.component';
import { AuthoriseComponent } from './authorise/authorise.component';

@NgModule({
  imports: [
    CommonModule,
    routerModule,
  ],
  declarations: [
    NewsListComponent,
    SearchListComponent,
    PhotoThumbnailComponent,
    AuthoriseComponent,
  ],
  exports: [
    NewsListComponent,
  ],
  providers: [
    UnsplashService,
  ],
})
export class UnsplashModule { }
