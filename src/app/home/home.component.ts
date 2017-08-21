import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { UserService } from 'app/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Show } from 'app/model/show';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentUser: User;
  shows: FirebaseListObservable<any[]>;

  constructor(private userService: UserService, public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.shows = db.list('/shows', {
      query: {
        limitToLast: 50
      }
    });
  }

  changeLike(event) {
    const likes = event.likes + 1;
    this.shows.update(event.$key, { likes: likes });
  }

  updateList(show: Show) {
    this.shows.push(show);
  }
}
