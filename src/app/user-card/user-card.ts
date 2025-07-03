import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css']
})
export class UserCard {
  userName = 'John Doe';
  userTitle = 'Developer';
  avatarUrl = '/assets/avatar.png'; // You can update this to your actual image path
}
