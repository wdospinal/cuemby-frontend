import { Observable } from 'rxjs/Rx';
import { AddProjectComponent } from './add-project/add-project.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { Project } from './model/project';
import { FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) { }

  public addProject(items: FirebaseListObservable<any[]>): Observable<Project> {

    let dialogRef: MdDialogRef<AddProjectComponent>;
    dialogRef = this.dialog.open(AddProjectComponent);
    dialogRef.componentInstance.items = items;

    return dialogRef.afterClosed();
  }

}
