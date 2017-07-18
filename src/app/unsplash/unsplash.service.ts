import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import credentials from '../../../credentials.json';

@Injectable()
export class UnsplashService {

  photos = [];

  photosStream = new Subject();

  constructor(private http: Http) {
    console.log(credentials);
  }

  getPhotosStream() {
    return Observable
      .from(this.photosStream)
      .startWith(this.photos);
  }

  getNewPhotos() {
    const url = 'http://localhost:3000/photos';
    return this.http.get(url)
      .map((response:Response) => response.json());
  }
}
