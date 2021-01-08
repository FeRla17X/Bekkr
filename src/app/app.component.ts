import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  commands = [
  {
    time:"12:22",
    txt:"Bless kengoorus Odin",
    success:0,
    permLvl:0
  },
  {
    time:"12:22",
    txt:"Bless kengoorus Odin",
    success:0,
    permLvl:0
  },
  {
    time:"12:22",
    txt:"Bless kengoorus Odin",
    success:0,
    permLvl:0
  }
  ];
  title = 'terminal';
}
