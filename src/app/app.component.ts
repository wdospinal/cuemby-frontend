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
    this.items = db.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
  }

  changeLike(event) {
    const likes = event.likes + 1;
    this.items.update(event.$key, { likes: likes });
  }

  updateList(project: Project) {
    this.items.push(project);
  }

  public openDialog() {
    this.dialogsService
      .addProject()
      .subscribe(res => {
        console.log(res);
        this.items.push(res);
      });
  }
}
