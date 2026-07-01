import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { AddIngredientsComponent } from '../../components/add-ingredients-component/add-ingredients-component';
import { IngredientsListComponent } from '../../components/ingredients-list-component/ingredients-list-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { RouterLink } from '@angular/router';
import { IngredientInterface } from '../../services/ingredient-interface';
import { HttpClient } from '@angular/common/http';

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
  constructor(
    private http: HttpClient,
  ) {}
  ingredient = '';
  amount = '';
  type = 'gram';

  ingredientList: IngredientInterface[] = [];

  enoughtIngredients = false;

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
    if (this.ingredient != '' && this.amount != '') {
      this.ingredientList = [
        ...this.ingredientList,
        {
          ingredient: this.ingredient,
          amount: this.amount,
          type: this.type,
        },
      ];
      // this.ingredient = '';
      // this.amount = '';
      console.log(this.ingredientList);
      this.checkIfEnoughtIngredients();
    }
  }

  deleteIngredient(index: number) {
    this.ingredientList.splice(index, 1);
    this.ingredientList = [...this.ingredientList];
    this.checkIfEnoughtIngredients();
  }

  checkIfEnoughtIngredients() {
    if (this.ingredientList.length >= 3) {
      this.enoughtIngredients = true;
    } else {
      this.enoughtIngredients = false;
    }
  }

  sendIngriedentList() {
    this.http
      .post('http://localhost:5678/webhook/ingredients', {
        ingredientList: this.ingredientList,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
