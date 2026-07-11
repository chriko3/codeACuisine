import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-component',
  imports: [],
  templateUrl: './add-component.html',
  styleUrl: './add-component.scss',
})
export class AddComponent {
  @Output() clicked = new EventEmitter<void>();

  /**
   * Runs when the user clicks.
   * Emits the click event to notify the listener.
   */
  onClick() {
    this.clicked.emit();
  }
}
