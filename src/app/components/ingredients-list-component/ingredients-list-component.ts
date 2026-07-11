import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EditDeleteComponent } from '../edit-delete-component/edit-delete-component';
import { IngredientInterface } from '../../services/ingredient-interface';
import { MeasurementPipe } from '../../services/measurement-pipe';

@Component({
  selector: 'app-ingredients-list-component',
  imports: [EditDeleteComponent, MeasurementPipe],
  templateUrl: './ingredients-list-component.html',
  styleUrl: './ingredients-list-component.scss',
})
export class IngredientsListComponent {
  @Input() ingredientList: IngredientInterface[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<number>();

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
    this.edit.emit(index);
  }
}
