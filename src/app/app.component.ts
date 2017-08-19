import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ShowComponent } from './show/show.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Show } from './model/show';
import { DialogsService } from './dialogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: FirebaseListObservable<any[]>;
  public result: any;
  constructor(public afAuth: AngularFireAuth, public db: AngularFireDatabase, private dialogsService: DialogsService) {
    this.items = db.list('/shows', {
      query: {
        limitToLast: 50
      }
    });
  }

  changeLike(event) {
    const likes = event.likes + 1;
    this.items.update(event.$key, { likes: likes });
  }

  updateList(show: Show) {
    this.items.push(show);
  }

  public openDialog() {
    this.dialogsService
      .openShow()
      .subscribe(res => {
        console.log(res);
        this.items.push(res);
      });
  }
}
