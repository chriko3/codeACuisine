import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { AddIngredientsComponent } from '../../components/add-ingredients-component/add-ingredients-component';
import { IngredientsListComponent } from '../../components/ingredients-list-component/ingredients-list-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { RouterLink } from '@angular/router';

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
export class GenerateRecipePage {}
