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
  loading = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
    private cdr: ChangeDetectorRef,
  ) {}

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

  getArray(n: number): number[] {
    return Array(Math.round(n)).fill(0);
  }

  openRecipe(id: number) {
    this.router.navigate(['/recipe', id],{
      queryParams:{
        source: 'db'
      }
    });
    console.log(id);
  }
}
