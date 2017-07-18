import { Component, OnInit } from '@angular/core';
import { UnsplashService } from './unsplash.service';

@Component({
  selector: 'authorise',
  template: `
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <button class="btn btn-primary" (click)="auth()">Autoryzuj</button>
      </p>
    </div>
  `,
  styles: [`
    .jumbotron {
      margin-top: 15px;
    }
  `]
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
