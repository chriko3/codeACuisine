import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { ChefLabelComponent } from '../../components/chef-label-component/chef-label-component';
import { SingleCuisineComponent } from '../../components/single-cuisine-component/single-cuisine-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { SecondaryButtonComponent } from '../../components/secondary-button-component/secondary-button-component';

@Component({
  selector: 'app-recipe-page',
  imports: [
    RouterLink,
    MenuBarComponent,
    ChefLabelComponent,
    SingleCuisineComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent
  ],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.scss',
})
export class RecipePage {}
