import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Photo viewer';

  toFirstItem() {
    console.log("toFirstItem()")
  }

  toLastItem() {
    console.log("toLastItem()")
  }

  toNextItem() {
    console.log("toNextItem()")
  }

  toPreviousItem() {
    console.log("toPreviousItem()")
  }
}
