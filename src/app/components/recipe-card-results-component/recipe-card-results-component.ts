import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button-component/primary-button-component';
import { TimeFormatPipe } from '../../services/time-format-pipe';

@Component({
  selector: 'app-recipe-card-results-component',
  imports: [PrimaryButtonComponent, TimeFormatPipe],
  templateUrl: './recipe-card-results-component.html',
  styleUrl: './recipe-card-results-component.scss',
})
export class RecipeCardResultsComponent {
  @Input() number?: number;
  @Input() title?: string;
  @Input() timeInMin = 0;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
