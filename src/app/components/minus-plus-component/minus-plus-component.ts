import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minus-plus-component',
  imports: [],
  templateUrl: './minus-plus-component.html',
  styleUrl: './minus-plus-component.scss',
})
export class MinusPlusComponent {
  @Input() minusOrPlus: 'minus' | 'plus' = 'minus'
}
