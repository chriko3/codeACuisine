import { Component, ChangeDetectorRef } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { RouterLink, Router } from '@angular/router';
import { MostLikedRecipesComponent } from '../../components/most-liked-recipes-component/most-liked-recipes-component';
import { RecipeCardCookBookComponent } from '../../components/recipe-card-cook-book-component/recipe-card-cook-book-component';
import { SecondaryButtonComponent } from '../../components/secondary-button-component/secondary-button-component';
import { SupabaseService } from '../../services/supabase-service';
import { TimeFormatPipe } from '../../services/time-format-pipe';

@Component({
  selector: 'app-cookbook-page',
  imports: [
    RouterLink,
    MenuBarComponent,
    MostLikedRecipesComponent,
    RecipeCardCookBookComponent,
    SecondaryButtonComponent,
    TimeFormatPipe,
  ],
  templateUrl: './cookbook-page.html',
  styleUrl: './cookbook-page.scss',
})
export class CookbookPage {
  constructor(
    private router: Router,
    private supabaseService: SupabaseService,
    private cdr: ChangeDetectorRef,
  ) {}

  recipes: any[] = [];
  loading = true;

  /**
   * Loads all recipes when the component starts.
   * Updates the recipe list and stops the loading state.
   */
  ngOnInit() {
    this.supabaseService.getAllRecipes().then((data) => {
      this.recipes = data ?? [];
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  /**
   * Opens a recipe page by its ID.
   * Navigates to the recipe details view.
   */
  openRecipe(id: number) {
    this.router.navigate(['/recipe', id], {
      queryParams: {
        source: 'db',
      },
    });
  }
}
