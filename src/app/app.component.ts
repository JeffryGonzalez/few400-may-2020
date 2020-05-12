import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'few400';
  footer = 'This is the footer';
  doIt() {
    this.footer = 'Jeff Was Here';
  }

  myKidWantsSomething(what: string) {
    console.log(what);
  }
}
