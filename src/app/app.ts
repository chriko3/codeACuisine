import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { GenerateRecipePage } from "./pages/generate-recipe-page/generate-recipe-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePage, GenerateRecipePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('codeACuisine');
}
