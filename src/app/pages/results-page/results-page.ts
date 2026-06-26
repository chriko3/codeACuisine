import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { TagButtonComponent } from '../../components/tag-button-component/tag-button-component';
import { RecipeCardResultsComponent } from '../../components/recipe-card-results-component/recipe-card-results-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-results-page',
  imports: [RouterLink, MenuBarComponent, TagButtonComponent, RecipeCardResultsComponent],
  templateUrl: './results-page.html',
  styleUrl: './results-page.scss',
})
export class ResultsPage {}
