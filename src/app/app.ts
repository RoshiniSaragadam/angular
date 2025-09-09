import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user1',
  imports: [RouterOutlet],
  templateUrl: './user1.html',
  styleUrl: './user1.css'
})
export class App {
  protected readonly title = signal('newproject');
}
