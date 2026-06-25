import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { PrimaryButtonComponent } from "../../components/primary-button-component/primary-button-component";
import { PaginationComponent } from "../../components/pagination-component/pagination-component";

@Component({
  selector: 'app-loading-page',
  imports: [MenuBarComponent, PrimaryButtonComponent, PaginationComponent],
  templateUrl: './loading-page.html',
  styleUrl: './loading-page.scss',
})
export class LoadingPage {}
