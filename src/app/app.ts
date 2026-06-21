import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar-component/menu-bar-component';
import { AddIngredientsComponent } from './components/add-ingredients-component/add-ingredients-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent, AddIngredientsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('codeACuisine');
}
