import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  template: `
    <div class='crop'
      [style.width.px]='starWidth'
      [title]='rating'
      (click)='onClick()'>
      <div [style.width.px]='starContainerWidth'>
        <mat-icon>star</mat-icon>
        <mat-icon>star</mat-icon>
        <mat-icon>star</mat-icon>
        <mat-icon>star</mat-icon>
        <mat-icon>star</mat-icon>
      </div>
    </div>
  `,
  styles: ['.crop { overflow: hidden }', 'div { cursor: pointer }']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 4;
  starContainerWidth: number = 120;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * this.starContainerWidth / 5;

  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
