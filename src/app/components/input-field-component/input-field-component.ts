import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field-component',
  imports: [],
  templateUrl: './input-field-component.html',
  styleUrl: './input-field-component.scss',
})
export class InputFieldComponent {
  @Input() placeholder = '';
  @Input() type: 'text' | 'number' = 'text';
  @Input() value = '';

  @Output() inputTextSend = new EventEmitter<string>();

  /**
   * Gets the input value from the event.
   * Emits the value to the listener.
   */
  getInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputTextSend.emit(value);
  }
}
