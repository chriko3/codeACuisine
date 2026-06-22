import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MostLikedRecipesComponent } from './components/most-liked-recipes-component/most-liked-recipes-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MostLikedRecipesComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('codeACuisine');
}
