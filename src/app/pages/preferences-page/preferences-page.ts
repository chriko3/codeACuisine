import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { RouterLink } from '@angular/router';
import { MinusPlusComponent } from "../../components/minus-plus-component/minus-plus-component";
import { PaginationComponent } from "../../components/pagination-component/pagination-component";
import { TagButtonComponent } from "../../components/tag-button-component/tag-button-component";
import { PrimaryButtonComponent } from "../../components/primary-button-component/primary-button-component";

@Component({
  selector: 'app-preferences-page',
  imports: [MenuBarComponent, RouterLink, MinusPlusComponent, PaginationComponent, TagButtonComponent, PrimaryButtonComponent],
  templateUrl: './preferences-page.html',
  styleUrl: './preferences-page.scss',
})
export class PreferencesPage {}
