import { Component, ChangeDetectorRef } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-loading-page',
  imports: [MenuBarComponent, RouterLink],
  templateUrl: './loading-page.html',
  styleUrl: './loading-page.scss',
})
export class LoadingPage {
  constructor(private cdr: ChangeDetectorRef) {}
  displayLoadingText = '';
  loadingText = [
    'Chopping ingredients 🔪',
    'Preheating the kitchen 🔥',
    'Measuring ingredients ⚖️',
    'Mixing flavors 🍲',
    'Taste optimization in progress 🤤',
    'Adding a pinch of magic ✨',
  ];
  index = 0;

  ngOnInit() {
    this.displayLoadingText = this.loadingText[this.index];
    setInterval(() => {
      this.index++;
      if (this.index >= this.loadingText.length) {
        this.index = 0;
      }
      this.displayLoadingText = this.loadingText[this.index];
      this.cdr.detectChanges();
    }, 2600);
  }
}
