import { Component, ChangeDetectorRef } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { RouterLink } from '@angular/router';
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
    private supabaseService: SupabaseService,
    private cdr: ChangeDetectorRef,
  ) {}

  recipes: any[] = [];

  ngOnInit() {
    this.supabaseService.getAllRecipes().then((data) => {
      this.recipes = data ?? [];
      this.cdr.detectChanges();
    });
  }
}
