import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputFieldComponent } from '../input-field-component/input-field-component';
import { MeasurementsComponent } from '../measurements-component/measurements-component';
import { AddComponent } from '../add-component/add-component';

@Component({
  selector: 'app-add-ingredients-component',
  imports: [InputFieldComponent, MeasurementsComponent, AddComponent],
  templateUrl: './add-ingredients-component.html',
  styleUrl: './add-ingredients-component.scss',
})
export class AddIngredientsComponent {
  @Input() suggestion: string | any;
  @Input() ingredientValue = '';
  @Input() amountValue = '';
  @Input() measurement = '';

  @Output() ingredient = new EventEmitter<string>();
  @Output() amount = new EventEmitter<string>();
  @Output() selected = new EventEmitter<string>();
  @Output() clicked = new EventEmitter<void>();

  /**
   * Emits the entered ingredient value.
   * Sends the value to the listener.
   */
  onIngredientInput(value: string) {
    this.ingredient.emit(value);
  }

  /**
   * Emits the entered amount value.
   * Sends the value to the listener.
   */
  onAmountInput(value: string) {
    this.amount.emit(value);
  }

  /**
   * Emits the selected value.
   * Sends the value to the listener.
   */
  onSelected(value: string) {
    this.selected.emit(value);
  }

  /**
   * Runs when the user clicks.
   * Emits the click event to the listener.
   */

  onClick() {
    this.clicked.emit();
  }

  /**
   * Sets the suggestion as the current ingredient value.
   * Emits the suggestion and clears the old suggestion.
   */
  getSuggestion() {
    this.ingredientValue = this.suggestion;
    this.ingredient.emit(this.suggestion);
    this.suggestion = '';
  }
}
