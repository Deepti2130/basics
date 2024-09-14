import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';

  skills : Array<string> = ["Angular", "Javascript", "Typescript", "Bootstrap"]

  criketers : Array<string> = ["Rohit sharma", "Virat Kohli", "Hardik Pandya", "Bumrah"]

  sportsName:Array<string> = ["Football", "Tennis", "Badminton", "Cricket"]

  cities:Array<string> = ["Pune", "Kolhapur", "Mumbai", "Nagpur", "Nashik"]

}
