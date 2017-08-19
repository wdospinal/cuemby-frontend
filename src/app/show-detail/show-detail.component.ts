import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Show } from 'app/model/show';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  public show: Show;

  constructor(public dialogRef: MdDialogRef<ShowDetailComponent>) { }

  ngOnInit() {
  }

}
