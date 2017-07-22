import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'photo-thumbnail',
  templateUrl: './photo-thumbnail.component.html',
  styles: ['./photo-thumbnail.component.scss']
})
export class PhotoThumbnailComponent implements OnInit {

  @Input()
  photo;

  constructor() { }

  ngOnInit() {
  }

}
