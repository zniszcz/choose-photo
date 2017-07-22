import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../unsplash.service';
import { Router } from '@angular/router';

@Component({
  selector: 'authorise',
  template: '',
  styleUrls: []
})
export class AuthoriseComponent implements OnInit {

  constructor(private unsplashService:UnsplashService,
      private router:Router) { }

  ngOnInit() {
    if (location.search.startsWith("?code=")) {
      this.unsplashService
        .setUnsplashAuthenticationCode(location.search.substr(6, location.search.length - 6));
    }
    this.router.navigateByUrl('/news');
  }

}
