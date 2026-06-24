import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-tag-button-component',
  imports: [],
  templateUrl: './tag-button-component.html',
  styleUrl: './tag-button-component.scss',
})
export class TagButtonComponent {
  @Input() text?: string;
  @Input() optionalText?:string;

  isSelected = false;

  toggle() {
    this.isSelected = !this.isSelected;
    console.log(this.isSelected);
    
  }
}
