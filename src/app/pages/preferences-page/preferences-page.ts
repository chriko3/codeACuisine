import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { Router } from '@angular/router';
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
    MinusPlusComponent,
    PaginationComponent,
    TagButtonComponent,
    PrimaryButtonComponent,
  ],
  templateUrl: './preferences-page.html',
  styleUrl: './preferences-page.scss',
})
export class PreferencesPage {
  portions = 2;
  persons = 1;
  activeTagCookingTime = '';
  activeTagCuisine = '';
  activeTagDietPreferences = '';

  recipes: any[] | null = null;

  allPreferences: PreferencesInterface[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}

  /**
   * Loads saved recipe data from the session storage.
   */
  ngOnInit() {
    const sStorage = sessionStorage.getItem('kiRecipes');
    if (sStorage) {
      this.recipes = JSON.parse(sStorage);
    }
  }

  /**
   * Increases the selected value.
   * Limits the maximum number of portions or persons.
   */
  increase(portionsOrPersons: 'portions' | 'persons') {
    if (portionsOrPersons == 'persons') {
      if (this[portionsOrPersons] < 4) {
        this[portionsOrPersons]++;
      }
    } else {
      if (this[portionsOrPersons] < 12) {
        this[portionsOrPersons]++;
      }
    }
  }

  /**
   * Decreases the selected value.
   * Limits the minimum value to one.
   */
  decrease(portionsOrPersons: 'portions' | 'persons') {
    if (this[portionsOrPersons] > 1) {
      this[portionsOrPersons]--;
    }
  }

  /**
   * Updates the selected cooking time tag.
   */
  onSelectedTagCookingTime(tag: string) {
    this.activeTagCookingTime = tag;
  }

  /**
   * Updates the selected cuisine tag.
   */
  onSelectedCuisine(tag: string) {
    this.activeTagCuisine = tag;
  }

  /**
   * Updates the selected diet preference tag.
   */
  onSelectedDietPreferences(tag: string) {
    this.activeTagDietPreferences = tag;
  }

  /**
   * Creates a recipe request with the selected preferences.
   * Sends the data and navigates to the loading page.
   */
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
        dietpreferences: this.activeTagDietPreferences,
      });
      this.sendPreferencesList();
      this.router.navigate(['\loading']);
    }
  }

  /**
   * Sends the selected preferences to the server.
   * Saves the received recipes in the session storage.
   */
  sendPreferencesList() {
    // this.http
    //   .post<any[]>('https://christoph-kohout.app.n8n.cloud/webhook/preferences', {
    //     allPreferences: this.allPreferences,
    //   })
    //   .subscribe({
    //     next: (res) => {
    //       sessionStorage.setItem('kiRecipes', JSON.stringify(res));
    //       this.recipes = res;
    //     },
    //   });
  }
}
