import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { AddIngredientsComponent } from '../../components/add-ingredients-component/add-ingredients-component';
import { IngredientsListComponent } from '../../components/ingredients-list-component/ingredients-list-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { RouterLink } from '@angular/router';
import { IngredientInterface } from '../../services/ingredient-interface';
import { HttpClient } from '@angular/common/http';
import { WordSuggestionService } from '../../services/word-suggestion-service';

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
    private wordSuggestionService: WordSuggestionService,
  ) {}
  ingredient = '';
  amount = '';
  type = 'gram';
  suggestion: string | undefined;

  ingredientList: IngredientInterface[] = [];

  enoughtIngredients = false;

  /**
   * Runs when the component starts.
   * Clears the session storage.
   */
  ngOnInit() {
    this.deleteSessionStorage();
  }

  /**
   * Updates the ingredient value.
   * Gets a word suggestion for the entered ingredient.
   */
  onIngredientChange(value: string) {
    this.ingredient = value;
    this.suggestion = this.wordSuggestionService.searchWord(this.ingredient);
  }

  /**
   * Updates the amount value.
   */
  onAmountChange(value: string) {
    this.amount = value;
  }

  /**
   * Updates the selected ingredient type.
   */
  onSelectedChange(value: string) {
    this.type = value;
  }

  /**
   * Clears all data from the session storage.
   */
  deleteSessionStorage() {
    sessionStorage.clear();
  }

  /**
   * Adds a new ingredient to the ingredient list.
   * Resets the input values and checks the ingredient count.
   */
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
      this.ingredient = '';
      this.amount = '';
      this.type = 'gram';
      this.suggestion = '';
      this.checkIfEnoughtIngredients();
    }
  }

  /**
   * Removes an ingredient from the list.
   * Updates the list and checks the ingredient count.
   */
  deleteIngredient(index: number) {
    this.ingredientList.splice(index, 1);
    this.ingredientList = [...this.ingredientList];
    this.checkIfEnoughtIngredients();
  }

  /**
   * Checks if enough ingredients are added.
   * Sets the state based on the ingredient count.
   */
  checkIfEnoughtIngredients() {
    if (this.ingredientList.length >= 3) {
      this.enoughtIngredients = true;
    } else {
      this.enoughtIngredients = false;
    }
  }

  /**
   * Sends the ingredient list to the server.
   * Posts the data to the webhook endpoint.
   */
  sendIngriedentList() {
    this.http
      .post('https://christoph-kohout.app.n8n.cloud/webhook/ingredients', {
        ingredientList: this.ingredientList,
      })
      .subscribe((res) => {});
  }
}
