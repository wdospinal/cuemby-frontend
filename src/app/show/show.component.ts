import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../model/show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() show: Show;

  @Output()
  change: EventEmitter<Show> = new EventEmitter<Show>();

  constructor() { }

  ngOnInit() {
  }
  doLike() {
    this.change.emit(this.show);
  }

}
