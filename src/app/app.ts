import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SingleRecipeCookbookComponent } from './components/single-recipe-cookbook-component/single-recipe-cookbook-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SingleRecipeCookbookComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('codeACuisine');
}
