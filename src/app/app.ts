import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckComponent } from './components/check-component/check-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CheckComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('codeACuisine');
}
