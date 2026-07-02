import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { ChefLabelComponent } from '../../components/chef-label-component/chef-label-component';
import { SingleCuisineComponent } from '../../components/single-cuisine-component/single-cuisine-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { SecondaryButtonComponent } from '../../components/secondary-button-component/secondary-button-component';
import { TimeFormatPipe } from '../../services/time-format-pipe';
import { MeasurementPipe } from '../../services/measurement-pipe';

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
    MeasurementPipe
  ],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.scss',
})
export class RecipePage {
  constructor(private route: ActivatedRoute) {}

  url = '';
  sStorage = sessionStorage.getItem('kiRecipes');
  recipes: any[] = [];
  recipeNumber = 0;
  ngOnInit() {
    if (this.sStorage) {
      this.recipes = JSON.parse(this.sStorage).recipes;
    }
    this.route.url.subscribe((event) => {
      this.url = event[1].path;
    });
    this.recipeNumber = Number(this.url) - 1;
    console.log(this.recipeNumber);
  }

  getArray(n: number): number[] {
  return Array(n).fill(0);
}
}
