import { Component, OnInit } from '@angular/core';
import { UnsplashService } from './unsplash.service';

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(private unsplashService:UnsplashService) {

  }

  ngOnInit() {
  }

}
