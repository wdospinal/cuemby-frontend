import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from '../model/show';
import { DialogsService } from '../dialogs.service';
import { ShowsService } from 'app/shows.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() show: Show;

  @Output()
  change: EventEmitter<Show> = new EventEmitter<Show>();

  constructor(private dialogsService: DialogsService, private showsService: ShowsService) { }

  ngOnInit() {
  }

  addFavorite() {
    this.showsService.addFavorite(this.show)
    .subscribe(data => {
      console.log('send');
    }, error => {
      console.log(error);
    });
  }

  doLike() {
    this.change.emit(this.show);
  }

  public openDialog() {
    this.dialogsService
      .openShow(this.show)
      .subscribe(res => {
        console.log(res);
      });
  }
}
