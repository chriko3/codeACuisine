import { Component, Output, EventEmitter } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { TagButtonComponent } from '../../components/tag-button-component/tag-button-component';
import { RecipeCardResultsComponent } from '../../components/recipe-card-results-component/recipe-card-results-component';
import { Router, RouterLink } from '@angular/router';
import { SupabaseService } from '../../services/supabase-service';

@Component({
  selector: 'app-results-page',
  imports: [RouterLink, MenuBarComponent, TagButtonComponent, RecipeCardResultsComponent],
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
  ngOnInit() {
    if (this.sStorage) {
      this.recipes = JSON.parse(this.sStorage).recipes;
    }
    else if(!this.sStorage){
      this.router.navigate(['/']);
    }

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

  openRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }
}
