import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button-component',
  imports: [],
  templateUrl: './primary-button-component.html',
  styleUrl: './primary-button-component.scss',
})
export class PrimaryButtonComponent {
  @Input() text?: string;
  @Input() color: 'green' | 'white' = 'green';

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
