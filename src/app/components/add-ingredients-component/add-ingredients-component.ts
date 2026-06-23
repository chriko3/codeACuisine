import { Component } from '@angular/core';
import { InputFieldComponent } from '../input-field-component/input-field-component';
import { MeasurementsComponent } from '../measurements-component/measurements-component';

@Component({
  selector: 'app-add-ingredients-component',
  imports: [InputFieldComponent, MeasurementsComponent],
  templateUrl: './add-ingredients-component.html',
  styleUrl: './add-ingredients-component.scss',
})
export class AddIngredientsComponent {}
