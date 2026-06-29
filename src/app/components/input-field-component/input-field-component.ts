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

  @Output() inputTextSend = new EventEmitter<string>();

  getInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputTextSend.emit(value);
  }
}
