import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { TagButtonComponent } from '../../components/tag-button-component/tag-button-component';
import { RecipeCardResultsComponent } from '../../components/recipe-card-results-component/recipe-card-results-component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results-page',
  imports: [RouterLink, MenuBarComponent, TagButtonComponent, RecipeCardResultsComponent],
  templateUrl: './results-page.html',
  styleUrl: './results-page.scss',
})
export class ResultsPage {
  constructor(private http: HttpClient) {}
  recipe: any = null;
  ngOnInit() {
    this.http
      .post('http://localhost:5678/webhook/preferences', {
        prompt: 'make recipe',
      })
      .subscribe((res: any) => {
        console.log(res);
        this.recipe = res;
      });
  }
}
