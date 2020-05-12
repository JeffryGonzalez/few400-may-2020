import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() footerMessage = 'This is the footer!';
  @Output() something = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  changeIt() {
    this.footerMessage = 'TA DA!';
  }

  somethingHappened() {
    // I might do some stuff.
    // I want to let my parent know this happened.
    this.something.emit('Hi.');
  }
}
