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

  onClick() {
    this.clicked.emit();
  }
}
