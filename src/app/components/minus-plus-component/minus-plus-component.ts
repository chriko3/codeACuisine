import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-minus-plus-component',
  imports: [],
  templateUrl: './minus-plus-component.html',
  styleUrl: './minus-plus-component.scss',
})
export class MinusPlusComponent {
  @Input() minusOrPlus: 'minus' | 'plus' = 'minus';

  @Output() clicked = new EventEmitter<void>();

  /**
   * Runs when the user clicks.
   * Emits the click event to the listener.
   */
  onClick() {
    this.clicked.emit();
  }
}
