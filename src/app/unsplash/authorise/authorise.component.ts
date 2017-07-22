import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';

@Component({
  selector: 'authorise',
  templateUrl: './authorise.component.html',
  styleUrls: ['./authorise.component.scss']
})
export class AuthoriseComponent implements OnInit {

  constructor(private unsplashService:UnsplashService) { }

  auth() {
    const url = this.unsplashService.getAuthenticationUrl();
    console.log(url);
    location.assign(url);
  }

  ngOnInit() {
    const search = location.search;
    if (search.startsWith("?code=")) {
      this.unsplashService
        .setUnsplashAuthenticationCode(search.substr(6, search.length - 6));
    }
  }

}
