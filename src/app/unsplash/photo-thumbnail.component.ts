import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-thumbnail',
  template: `
    <div class="card">
      <img class="card-img-top" src="{{ photo.urls.thumb }}" alt="Card image cap">
    </div>
  `,
  styles: [`

  `]
})
export class PhotoThumbnailComponent implements OnInit {

  @Input()
  photo;

  constructor() { }

  ngOnInit() {
  }

}
