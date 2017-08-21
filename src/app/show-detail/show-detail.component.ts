import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Show } from 'app/model/show';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { ShowsService } from 'app/shows.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  public show: Show;
  model: any = { comment: '' };
  comments: FirebaseListObservable<any[]>;
  constructor(public dialogRef: MdDialogRef<ShowDetailComponent>, public db: AngularFireDatabase, private showsService: ShowsService) {
  }

  ngOnInit() {
    this.comments = this.db.list(`/comments/${this.show.id}`);
  }

  addComment() {
    this.showsService.addComment(this.show, this.model.comment)
    .subscribe(data => {
      this.model.comment = '';
    }, error => {
      console.log(error);
    });
  }
}
