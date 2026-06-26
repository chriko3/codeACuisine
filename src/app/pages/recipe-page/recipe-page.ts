import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { ChefLabelComponent } from '../../components/chef-label-component/chef-label-component';

@Component({
  selector: 'app-recipe-page',
  imports: [RouterLink, MenuBarComponent, ChefLabelComponent],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.scss',
})
export class RecipePage {}
