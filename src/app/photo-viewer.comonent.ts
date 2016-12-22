import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})
export class PhotoViewer implements OnInit {

  private imgUrls: string[];
  private imgIndex = 0;

  ngOnInit() {
    this.imgUrls = ["http://www.w3schools.com/css/img_fjords.jpg",
      "http://www.w3schools.com/css/img_forest.jpg",
      "http://www.w3schools.com/css/img_lights.jpg",
      "http://www.w3schools.com/css/img_mountains.jpg"];
  }

  toFirstItem() {
    this.imgIndex = 0;
  }

  toLastItem() {
    this.imgIndex = this.imgUrls.length - 1;
  }

  toNextItem() {
    if (this.imgIndex < this.imgUrls.length - 1) {
      this.imgIndex++;
    }
  }

  toPreviousItem() {
    if (this.imgIndex > 0) {
      this.imgIndex--;
    }
  }
}
