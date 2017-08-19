import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../model/show';
import { DialogsService } from '../dialogs.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() show: Show;

  @Output()
  change: EventEmitter<Show> = new EventEmitter<Show>();

  constructor(private dialogsService: DialogsService) { }

  ngOnInit() {
  }

  doLike() {
    this.change.emit(this.show);
  }

  public openDialog() {
    console.log(this.show);
    this.dialogsService
      .openShow(this.show)
      .subscribe(res => {
        console.log(res);
      });
  }
}
