import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { EditDeleteComponent } from '../edit-delete-component/edit-delete-component';
import { IngredientInterface } from '../../services/ingredient-interface';
import { MeasurementPipe } from '../../services/measurement-pipe';
import { InputFieldComponent } from '../input-field-component/input-field-component';
import { MeasurementsComponent } from '../measurements-component/measurements-component';

@Component({
  selector: 'app-ingredients-list-component',
  imports: [EditDeleteComponent, MeasurementPipe, InputFieldComponent, MeasurementsComponent],
  templateUrl: './ingredients-list-component.html',
  styleUrl: './ingredients-list-component.scss',
})
export class IngredientsListComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  editingIndex: number | null = null;
  @Input() ingredientList: IngredientInterface[] = [];
  @Output() delete = new EventEmitter<number>();
  amount = '';

  /**
   * Emits the index of the ingredient to delete.
   * Sends the index to the listener.
   */
  deleteIngredient(index: number) {
    this.delete.emit(index);
  }

  /**
   * Emits the index of the ingredient to edit.
   * Sends the index to the listener.
   */
  editIngredient(index: number) {
    if (this.editingIndex === index) {
      this.editingIndex = null;
    } else {
      this.editingIndex = index;
    }

    this.amount = this.ingredientList[index].amount;
    console.log('liste ' + this.ingredientList[index].amount);
  }

  onAmountInput(value: string) {
    this.amount = value;
    console.log('input ' + this.amount);
  }
}
