import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { SingleCuisineComponent } from '../../components/single-cuisine-component/single-cuisine-component';

@Component({
  selector: 'app-cat-recipe-page',
  imports: [RouterLink, MenuBarComponent, PrimaryButtonComponent, SingleCuisineComponent],
  templateUrl: './cat-recipe-page.html',
  styleUrl: './cat-recipe-page.scss',
})
export class CatRecipePage {
  url = '';
  capitalized = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.url.subscribe((event) => {
      this.url = event[1].path;
    });

    this.capitalized = this.url.charAt(0).toUpperCase() + this.url.slice(1);
    console.log(this.capitalized);
  }
}
