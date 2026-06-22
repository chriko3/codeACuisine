import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChefLabelComponent } from './components/chef-label-component/chef-label-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChefLabelComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('codeACuisine');
}
