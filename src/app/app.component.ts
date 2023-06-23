import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'moments';
  userName = 'Jorge';
  personData = {
    email: 'jjorge98@outlook.com',
    role: 'Dev',
  };
}
