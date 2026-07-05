import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { ChefLabelComponent } from '../../components/chef-label-component/chef-label-component';
import { SingleCuisineComponent } from '../../components/single-cuisine-component/single-cuisine-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { SecondaryButtonComponent } from '../../components/secondary-button-component/secondary-button-component';
import { TimeFormatPipe } from '../../services/time-format-pipe';
import { MeasurementPipe } from '../../services/measurement-pipe';
import { SupabaseService } from '../../services/supabase-service';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-recipe-page',
  imports: [
    RouterLink,
    MenuBarComponent,
    ChefLabelComponent,
    SingleCuisineComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    TimeFormatPipe,
    MeasurementPipe,
  ],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.scss',
})
export class RecipePage {
  constructor(
    private route: ActivatedRoute,
    private supabaseService: SupabaseService,
    private cdr: ChangeDetectorRef,
  ) {}

  url = '';
  source = '';
  sStorage = sessionStorage.getItem('kiRecipes');
  recipes: any[] = [];
  recipeNumber = 0;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.recipeNumber = Number(params.get('id')) - 1;
    });

    this.route.queryParams.subscribe((params) => {
      this.source = params['source'];
    });

    this.checkSourceAndSetArray();
  }

  checkSourceAndSetArray() {
    if (this.source == 'generating') {
      if (this.sStorage) {
        this.recipes = JSON.parse(this.sStorage).recipes;
        this.cdr.detectChanges();
      }
    } else if (this.source == 'db') {
      this.supabaseService.getRecipesById(this.recipeNumber + 1).then((data) => {
        this.recipes = data ?? [];
        this.recipeNumber = 0;
        this.cdr.detectChanges();
      });
    }
  }

  getArray(n: number): number[] {
    return Array(n).fill(0);
  }
}
