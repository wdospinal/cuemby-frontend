import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { Show } from './model/show';
import { FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) { }

  public openShow(): Observable<Show> {
    /*
    let dialogRef: MdDialogRef<AddProjectComponent>;
    dialogRef = this.dialog.open(AddProjectComponent);

    return dialogRef.afterClosed();
    */
    return null;
  }

}
