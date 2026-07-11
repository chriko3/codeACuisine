import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-measurements-component',
  imports: [],
  templateUrl: './measurements-component.html',
  styleUrl: './measurements-component.scss',
})
export class MeasurementsComponent {
  rotate = false;
  @Input() selectedValue = 'gram';

  @Output() selectedSend = new EventEmitter<string>();

  toggle() {
    this.rotate = !this.rotate;
  }

  select(selection:string){
    this.selectedValue = selection;
    this.selectedSend.emit(selection);
  }
}
