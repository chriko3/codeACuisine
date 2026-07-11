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

  onIngredientInput(value: string) {
    this.ingredient.emit(value);
  }

  onAmountInput(value: string) {
    this.amount.emit(value);
  }

  onSelected(value: string) {
    this.selected.emit(value);
  }

  onClick() {
    this.clicked.emit();
  }

  getSuggestion() {
    this.ingredientValue = this.suggestion;
    this.ingredient.emit(this.suggestion);
    this.suggestion = '';
  }
}
