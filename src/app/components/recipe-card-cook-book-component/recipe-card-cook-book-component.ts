import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card-cook-book-component',
  imports: [],
  templateUrl: './recipe-card-cook-book-component.html',
  styleUrl: './recipe-card-cook-book-component.scss',
})
export class RecipeCardCookBookComponent {
  @Input() text?:string;
}
