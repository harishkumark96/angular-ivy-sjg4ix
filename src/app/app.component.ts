import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  person = [
    {
      name: 'harish1',
    },
    {
      name: 'harish2',
    },
  ];

  date = new Date();
  personName = 'harish';
  faren: Number = 100;
  celcius: Number = 37;
}
