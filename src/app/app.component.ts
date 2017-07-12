import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ProjectComponent } from './project/project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Project } from './model/project';
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
    console.log(db);
    this.items = db.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
  }

  changeLike(event) {
    console.log(event);
    const likes = event.likes + 1;
    this.items.update(event.$key, { likes: likes });
  }

  updateList(project: Project) {
    console.log(project);
    this.items.push(project);
  }

  public openDialog() {
    this.dialogsService
      .addProject(this.items)
      .subscribe(res => {
        console.log(res);
      });
  }
}
