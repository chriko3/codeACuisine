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
  urlNumber = 0;
  source = '';
  sStorage = sessionStorage.getItem('kiRecipes');
  recipes: any[] = [];
  recipeNumber = 0;
  likedRecipes: number[] = JSON.parse(localStorage.getItem('likedRecipes') || '[]');
  liked = false;
  loading = true;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.recipeNumber = Number(params.get('id')) - 1;
      this.urlNumber = this.recipeNumber + 1;
    });

    this.route.queryParams.subscribe((params) => {
      this.source = params['source'];
    });
    this.checkIfLiked();
    this.checkSourceAndSetArray();
  }

  checkIfLiked() {
    if (this.likedRecipes.includes(this.urlNumber)) {
      this.liked = true;
    } else {
      this.liked = false;
    }
    this.cdr.detectChanges();
  }

  checkSourceAndSetArray() {
    if (this.source == 'generating') {
      if (this.sStorage) {
        this.recipes = JSON.parse(this.sStorage).recipes;
        this.cdr.detectChanges();
        this.loading = false;
        this.supabaseService.getAmountLastRecipes(3).then((data) => {
          if (data) {
            for (let index = 0; index < data.length; index++) {
              if (this.recipes[this.recipeNumber].name == data[index].name) {
                this.recipes[this.recipeNumber].id = data[index].id;
                this.recipes[this.recipeNumber].likes = data[index].likes;
                this.urlNumber = data[index].id;
                this.supabaseService.subscribeToRecipesByIdGetLikes(data[index].id, (likes) => {
                  this.recipes[this.recipeNumber].likes = likes;
                  this.cdr.detectChanges();
                });
              }
            }
            this.cdr.detectChanges();
          }
        });
      }
    } else if (this.source == 'db') {
      this.supabaseService.getRecipesById(this.recipeNumber + 1).then((data) => {
        this.recipes = data ?? [];
        this.recipeNumber = 0;
        this.loading = false;
        this.cdr.detectChanges();
      });
      this.supabaseService.subscribeToRecipesByIdGetLikes(this.recipeNumber + 1, (likes) => {
        this.recipes[this.recipeNumber].likes = likes;
        this.cdr.detectChanges();
      });
    }
  }

  ngOnDestroy() {
    this.supabaseService.unsubscribeRecipes();
  }

  getArray(n: number): number[] {
    return Array(n).fill(0);
  }

  likeUnlikeRecipe() {
    const index = this.likedRecipes.indexOf(this.urlNumber);
    if (index === -1) {
      this.likedRecipes.push(this.urlNumber);
      this.supabaseService.likeRecipeById(this.urlNumber);
    } else {
      if (this.recipes[this.recipeNumber].likes !== 0) {
        this.likedRecipes.splice(index, 1);
        this.supabaseService.unlikeRecipeById(this.urlNumber);
      }
    }
    this.checkIfLiked();
    localStorage.setItem('likedRecipes', JSON.stringify(this.likedRecipes));
  }
}
