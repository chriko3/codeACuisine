import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-component',
  imports: [],
  templateUrl: './add-component.html',
  styleUrl: './add-component.scss',
})
export class AddComponent {
  @Output() clicked = new EventEmitter<void>();

  onClick(){
    this.clicked.emit();
  }
}
