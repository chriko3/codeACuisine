import { Component, Output, EventEmitter } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { TagButtonComponent } from '../../components/tag-button-component/tag-button-component';
import { RecipeCardResultsComponent } from '../../components/recipe-card-results-component/recipe-card-results-component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-results-page',
  imports: [RouterLink, MenuBarComponent, TagButtonComponent, RecipeCardResultsComponent],
  templateUrl: './results-page.html',
  styleUrl: './results-page.scss',
})
export class ResultsPage {
  constructor(private router: Router) {}
  sStorage = sessionStorage.getItem('kiRecipes');
  recipes: any[] = [];
  ngOnInit() {
    if (this.sStorage) {
      this.recipes = JSON.parse(this.sStorage).recipes;
    }
  }

  openRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }
}
