import { Component, Output, EventEmitter } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { TagButtonComponent } from '../../components/tag-button-component/tag-button-component';
import { RecipeCardResultsComponent } from '../../components/recipe-card-results-component/recipe-card-results-component';
import { Router, RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase-service';
import { SecondaryButtonComponent } from '../../components/secondary-button-component/secondary-button-component';

@Component({
  selector: 'app-results-page',
  imports: [
    RouterLink,
    MenuBarComponent,
    TagButtonComponent,
    RecipeCardResultsComponent,
    SecondaryButtonComponent,
  ],
  templateUrl: './results-page.html',
  styleUrl: './results-page.scss',
})
export class ResultsPage {
  constructor(
    private router: Router,
    private supabaseService: SupabaseService,
  ) {}

  sStorage = sessionStorage.getItem('kiRecipes');
  recipes: any[] = [];

  /**
   * Loads generated recipes from the session storage.
   * Saves the recipes to the database or redirects if no data exists.
   */
  ngOnInit() {
    if (this.sStorage) {
      this.recipes = JSON.parse(this.sStorage).recipes;
      this.saveToDB();
    } else {
      this.router.navigate(['/']);
    }
  }

  /**
   * Saves recipes to the database.
   * Checks for existing recipes before saving new ones.
   */
  saveToDB() {
    this.supabaseService.getRecipesByName(this.recipes[0].name).then((data) => {
      if (!data || data.length === 0) {
        for (let index = 0; index < this.recipes.length; index++) {
          this.supabaseService.saveRecipes(
            this.recipes[index].name,
            this.recipes[index].time,
            this.recipes[index].persons,
            this.recipes[index].cuisine,
            this.recipes[index].dietpreferences,
            this.recipes[index].cookingTime,
            this.recipes[index].energie,
            this.recipes[index].protein,
            this.recipes[index].fat,
            this.recipes[index].carbs,
            this.recipes[index].yourIngredients,
            this.recipes[index].extraIngredients,
            this.recipes[index].directions,
          );
        }
      }
    });
  }

  /**
   * Opens a recipe page by its index.
   * Navigates to the recipe details view.
   */
  openRecipe(index: number) {
    this.router.navigate(['/recipe', index], {
      queryParams: {
        source: 'generating',
      },
    });
  }
}
