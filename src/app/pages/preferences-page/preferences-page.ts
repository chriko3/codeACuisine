import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { Router, RouterLink } from '@angular/router';
import { MinusPlusComponent } from '../../components/minus-plus-component/minus-plus-component';
import { PaginationComponent } from '../../components/pagination-component/pagination-component';
import { TagButtonComponent } from '../../components/tag-button-component/tag-button-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { PreferencesInterface } from '../../services/preferences-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preferences-page',
  imports: [
    MenuBarComponent,
    RouterLink,
    MinusPlusComponent,
    PaginationComponent,
    TagButtonComponent,
    PrimaryButtonComponent,
  ],
  templateUrl: './preferences-page.html',
  styleUrl: './preferences-page.scss',
})
export class PreferencesPage {
  portions = 1;
  persons = 1;
  activeTagCookingTime = '';
  activeTagCuisine = '';
  activeTagDietPreferences = '';

  allPreferences: PreferencesInterface[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  increase(portionsOrPersons: 'portions' | 'persons') {
    if (portionsOrPersons == 'persons') {
      if (this[portionsOrPersons] < 4) {
        this[portionsOrPersons]++;
      }
    } else {
      if (this[portionsOrPersons] < 10) {
        this[portionsOrPersons]++;
      }
    }
  }

  decrease(portionsOrPersons: 'portions' | 'persons') {
    if (this[portionsOrPersons] > 1) {
      this[portionsOrPersons]--;
    }
  }

  onSelectedTagCookingTime(tag: string) {
    this.activeTagCookingTime = tag;
  }

  onSelectedCuisine(tag: string) {
    this.activeTagCuisine = tag;
  }

  onSelectedDietPreferences(tag: string) {
    this.activeTagDietPreferences = tag;
  }

  generateARecipe() {
    if (
      this.activeTagCookingTime == '' ||
      this.activeTagCuisine == '' ||
      this.activeTagDietPreferences == ''
    ) {
    } else {
      this.allPreferences.push({
        portions: this.portions,
        persons: this.persons,
        cookingTime: this.activeTagCookingTime,
        cuisine: this.activeTagCuisine,
        dietPreferences: this.activeTagDietPreferences,
      });
      this.sendPreferencesList();
      this.router.navigate(['\loading']);
      console.log(this.allPreferences);
    }
  }

  sendPreferencesList() {
    this.http
      .post('http://localhost:5678/webhook-test/preferences', {
        ingredientList: this.allPreferences,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
