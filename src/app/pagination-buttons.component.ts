import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
  styleUrls: ['./pagination-buttons.component.css']
})
export class PaginationButtons {
  @Output()
  private toFirstItem: EventEmitter<any> = new EventEmitter();
  @Output()
  private toPreviousItem: EventEmitter<any> = new EventEmitter();
  @Output()
  private toNextItem: EventEmitter<any> = new EventEmitter();
  @Output()
  private toLastItem: EventEmitter<any> = new EventEmitter();

  firstItem() {
    this.toFirstItem.emit();
  }

  previousItem() {
    this.toPreviousItem.emit();
  }

  nextItem() {
    this.toNextItem.emit();
  }

  lastItem() {
    this.toLastItem.emit();
  }
}

