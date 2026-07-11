import { Component, ChangeDetectorRef } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar-component/menu-bar-component';
import { Router, RouterLink } from '@angular/router';
import { SecondaryButtonComponent } from '../../components/secondary-button-component/secondary-button-component';

@Component({
  selector: 'app-loading-page',
  imports: [MenuBarComponent, RouterLink, SecondaryButtonComponent],
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
  error = false;

  /**
   * Starts the loading process.
   * Changes the loading text and checks the session storage for results or errors.
   * Redirects to the results page when data is available.
   */
  ngOnInit() {
    this.error = false;
    this.displayLoadingText = this.loadingText[this.index];
    this.interval = setInterval(() => {
      this.index++;
      if (this.index >= this.loadingText.length) {
        this.index = 0;
      }
      this.displayLoadingText = this.loadingText[this.index];
      const sStorage = sessionStorage.getItem('kiRecipes');
      if (sStorage) {
        const parsed = JSON.parse(sStorage);
        if (parsed.error) {
          this.error = true;
          clearInterval(this.interval);
        } else {
          this.router.navigate(['/results']);
        }
      }
      this.cdr.detectChanges();
    }, 2600);
  }

  /**
   * Stops the loading interval when the component is destroyed.
   */
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
