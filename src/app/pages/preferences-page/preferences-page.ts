import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { RouterLink } from '@angular/router';
import { MinusPlusComponent } from '../../components/minus-plus-component/minus-plus-component';
import { PaginationComponent } from '../../components/pagination-component/pagination-component';
import { TagButtonComponent } from '../../components/tag-button-component/tag-button-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';

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
  activeTag = '';

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

  onSelectedTag(tag: string) {
    this.activeTag = tag;
  }
}
