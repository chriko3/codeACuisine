import { Component, ChangeDetectorRef } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-loading-page',
  imports: [MenuBarComponent, RouterLink],
  templateUrl: './loading-page.html',
  styleUrl: './loading-page.scss',
})
export class LoadingPage {
  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}
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
  interval: any;

  ngOnInit() {
    this.displayLoadingText = this.loadingText[this.index];
    this.interval = setInterval(() => {
      this.index++;
      if (this.index >= this.loadingText.length) {
        this.index = 0;
      }
      this.displayLoadingText = this.loadingText[this.index];
      const sStorage = sessionStorage.getItem('kiRecipes');
      if (sStorage) {
        this.router.navigate(['/results']);
      }
      this.cdr.detectChanges();
    }, 2600);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
