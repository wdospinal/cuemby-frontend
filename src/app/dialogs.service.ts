import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { Show } from './model/show';
import { FirebaseListObservable } from 'angularfire2/database';
import { ShowDetailComponent } from './show-detail/show-detail.component';

@Injectable()
export class DialogsService {

  constructor(private dialog: MdDialog) { }

  public openShow(show: Show): Observable<Show> {
    let dialogRef: MdDialogRef<ShowDetailComponent>;
    dialogRef = this.dialog.open(ShowDetailComponent);
    console.log(show);
    dialogRef.componentInstance.show = show;
    return dialogRef.afterClosed();
  }

}
