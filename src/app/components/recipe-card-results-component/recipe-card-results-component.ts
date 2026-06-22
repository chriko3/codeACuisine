import { Component, Input } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button-component/primary-button-component';

@Component({
  selector: 'app-recipe-card-results-component',
  imports: [PrimaryButtonComponent],
  templateUrl: './recipe-card-results-component.html',
  styleUrl: './recipe-card-results-component.scss',
})
export class RecipeCardResultsComponent {
  @Input() number?: number;
  @Input() title?: string;
  @Input() timeInMin = 0;

  displayTime = "";
  ngOnInit() {
    if (this.timeInMin > 60) {
      console.log('bigger');
      this.displayTime = String((this.timeInMin / 60).toFixed(1)) + " hours";
    }
    else{
      this.displayTime = String(this.timeInMin) + " minutes";
    }
  }
}
