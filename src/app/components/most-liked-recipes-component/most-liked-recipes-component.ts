import { Component, Input } from '@angular/core';
import { TimeFormatPipe } from '../../services/time-format-pipe';

@Component({
  selector: 'app-most-liked-recipes-component',
  imports: [TimeFormatPipe],
  templateUrl: './most-liked-recipes-component.html',
  styleUrl: './most-liked-recipes-component.scss',
})
export class MostLikedRecipesComponent {
  @Input() timeInMin = 0;
  @Input() title?: string;
  @Input() likes = 0;
}
