import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loading-page',
  imports: [MenuBarComponent, RouterLink],
  templateUrl: './loading-page.html',
  styleUrl: './loading-page.scss',
})
export class LoadingPage {}
