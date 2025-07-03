import { Component } from '@angular/core';
import { UserCard } from './user-card/user-card';  // Adjust path if needed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCard],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'My First Angular App';
}
