import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { SingleCuisineComponent } from '../../components/single-cuisine-component/single-cuisine-component';
import { SingleRecipeCookbookComponent } from '../../components/single-recipe-cookbook-component/single-recipe-cookbook-component';
import { SupabaseService } from '../../services/supabase-service';
import { SecondaryButtonComponent } from '../../components/secondary-button-component/secondary-button-component';

@Component({
  selector: 'app-cat-recipe-page',
  imports: [
    RouterLink,
    MenuBarComponent,
    PrimaryButtonComponent,
    SingleCuisineComponent,
    SingleRecipeCookbookComponent,
    SecondaryButtonComponent,
  ],
  templateUrl: './cat-recipe-page.html',
  styleUrl: './cat-recipe-page.scss',
})
export class CatRecipePage {
  url = '';
  capitalized = '';
  recipes: any[] = [];
  noRecipes = false;

  startRecipes = 0;
  endRecipes = 15;

  loading = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
    private cdr: ChangeDetectorRef,
  ) {}

  /**
   * Loads the recipes for the current cuisine.
   * Gets the URL, loads the data and updates the recipe list.
   * Shows an empty state when no recipes are found.
   */
  ngOnInit() {
    this.route.url.subscribe((event) => {
      this.url = event[1].path;
    });
    this.capitalized = this.url.charAt(0).toUpperCase() + this.url.slice(1);
    this.supabaseService.getRecipesByCuisine(this.capitalized).then((data) => {
      this.recipes = data ?? [];

      this.loading = false;
      if (this.recipes.length === 0) {
        this.noRecipes = true;
      } else {
        this.noRecipes = false;
      }
      this.cdr.detectChanges();
    });
  }

  /**
   * Creates an array with a given length.
   * Used to create repeated items in the template.
   */
  getArray(n: number): number[] {
    return Array(Math.ceil(n)).fill(0);
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

  /**
   * Moves to the next recipe page.
   * Updates the recipe range and scrolls to the top.
   */
  nextPage() {
    if (this.endRecipes < this.recipes.length) {
      this.startRecipes += 15;
      this.endRecipes += 15;
      window.scrollTo(0, 0);
    }
  }

  /**
   * Moves to the previous recipe page.
   * Updates the recipe range and scrolls to the top.
   */
  previousPage() {
    if (this.startRecipes >= 15) {
      this.startRecipes -= 15;
      this.endRecipes -= 15;
      window.scrollTo(0, 0);
    }
  }

  /**
   * Changes to a specific recipe page.
   * Updates the recipe range and scrolls to the top.
   */
  goToPage(page: number) {
    this.startRecipes = (page - 1) * 15;
    this.endRecipes = page * 15;
    window.scrollTo(0, 0);
  }
}
