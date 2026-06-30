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

  deleteIngredient(index: number) {
    // this.ingredientList.splice(index, 1);
    this.delete.emit(index);
  }
}
