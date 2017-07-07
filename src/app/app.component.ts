import { Component } from '@angular/core';
import { MyComponentComponent } from './my-component/my-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi aplication';
  author = 'Daniel Ospina';
  count = 0;
  ban = false;
  imgSource = './../favicon.ico';
  childTitle = 'Write something';

  disable() {
    this.ban = !this.ban;
    console.log(this.ban);
  }
}
