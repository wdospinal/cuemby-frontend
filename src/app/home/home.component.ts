import { Component, OnInit } from '@angular/core';
import { User } from 'app/model/user';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { UserService } from 'app/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Show } from 'app/model/show';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentUser: User;
  search: string;
  shows: FirebaseListObservable<any[]>;
  favorites: FirebaseListObservable<any[]>;
  showSearch= false;

  constructor(private userService: UserService, public afAuth: AngularFireAuth, public db: AngularFireDatabase) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.shows = db.list('/shows', {
      query: {
        limitToLast: 50
      }
    });
    this.favorites = db.list('/favorites/');
  }
}
