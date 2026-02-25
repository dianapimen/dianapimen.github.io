import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
<<<<<<< HEAD
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mycv2');
=======
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cv-diana-style');
>>>>>>> 0c68f1b (initial commit)
}
