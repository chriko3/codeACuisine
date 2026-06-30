import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { PrimaryButtonComponent } from '../../components/primary-button-component/primary-button-component';
import { SecondaryButtonComponent } from '../../components/secondary-button-component/secondary-button-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [MenuBarComponent, PrimaryButtonComponent, SecondaryButtonComponent, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
