import { Component, Input } from '@angular/core';
import { TimeFormatPipe } from '../../services/time-format-pipe';

@Component({
  selector: 'app-single-recipe-cookbook-component',
  imports: [TimeFormatPipe],
  templateUrl: './single-recipe-cookbook-component.html',
  styleUrl: './single-recipe-cookbook-component.scss',
})
export class SingleRecipeCookbookComponent {
  @Input() timeInMin = 0;
  @Input() number = 0;
  @Input() time: 'Quick' | 'Medium' | 'Complex' = 'Quick';
  @Input() cuisine: 'German' | 'Austrian' | 'Italian' | 'Japanese' | 'Gourmet' | 'Fusion' =
    'Austrian';
  @Input() diet: 'Vegetarian' | 'Vegan' | 'Keto' | 'No preferences' = 'No preferences';
  @Input() likes = 0;
}
