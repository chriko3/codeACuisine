import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { AddIngredientsComponent } from '../../components/add-ingredients-component/add-ingredients-component';
import { IngredientsListComponent } from '../../components/ingredients-list-component/ingredients-list-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { RouterLink } from '@angular/router';
import { IngredientInterface } from '../../services/ingredient-interface';

@Component({
  selector: 'app-generate-recipe-page',
  imports: [
    MenuBarComponent,
    AddIngredientsComponent,
    IngredientsListComponent,
    PrimaryButtonComponent,
    RouterLink,
  ],
  templateUrl: './generate-recipe-page.html',
  styleUrl: './generate-recipe-page.scss',
})
export class GenerateRecipePage {
  ingredient = '';
  amount = '';
  type = 'gram';

  ingredientList: IngredientInterface[] = [];

  onIngredientChange(value: string) {
    this.ingredient = value;
  }

  onAmountChange(value: string) {
    this.amount = value;
  }

  onSelectedChange(value: string) {
    this.type = value;
  }

  addToIngredientsList() {
    if (this.ingredient != '' || this.amount != '') {
      this.ingredientList.push({
        ingredient: this.ingredient,
        amount: this.amount,
        type: this.type,
      });
      this.ingredient = '';
      this.amount = '';
      console.log(this.ingredientList);
    }
  }
}
