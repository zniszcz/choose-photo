import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import Unsplash from 'unsplash-js';
import credentials from '../../../credentials.json';

@Injectable()
export class UnsplashService {

  photos = [];

  photosStream = new Subject();

  unsplash;

  unsplashAuthenticationCode;

  constructor(private http: Http,
    private router: Router) {
    this.unsplash = new Unsplash(credentials);
  }

  getPhotosStream() {
    return Observable
      .from(this.photosStream)
      .startWith(this.photos);
  }

  getAuthenticationUrl() {
    return this.unsplash.auth.getAuthenticationUrl([
      "public",
      "read_user",
      "read_photos",
    ]);
  }

  getNewPhotos() {
    return this.unsplash.photos.listPhotos(2, 15, "latest")
      .then((response) => response.json())
  }

  setUnsplashAuthenticationCode(code) {
    this.unsplashAuthenticationCode = code;
      this.unsplash.auth.userAuthentication(code)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          this.unsplash
            .auth
            .setBearerToken(json.access_token);
        });
    this.router.navigateByUrl('/news');
  }
}
