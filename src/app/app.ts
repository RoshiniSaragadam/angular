import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User1 } from './user1/user1';

@Component({
  selector: 'app-user1',
  imports: [RouterOutlet, User1],
  templateUrl: './user1.html',
  styleUrl: './user1.css'
})
export class App {
  protected readonly title = signal('newproject');
}
