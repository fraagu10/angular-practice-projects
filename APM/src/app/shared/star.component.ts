import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
  @Input() rating: number = 4;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  // only watches for changes on input properties
  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

  onClick(): void {
    this.ratingClicked.emit(`Rating ${this.rating} was clicked!`);
  }

}