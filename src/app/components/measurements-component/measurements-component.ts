import { Component } from '@angular/core';

@Component({
  selector: 'app-measurements-component',
  imports: [],
  templateUrl: './measurements-component.html',
  styleUrl: './measurements-component.scss',
})
export class MeasurementsComponent {
  rotate = false;
  selected = "gram";

  toggle() {
    this.rotate = !this.rotate;
  }

  select(selection:string){
    this.selected = selection;
  }
}
