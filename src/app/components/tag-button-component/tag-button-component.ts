import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-button-component',
  imports: [],
  templateUrl: './tag-button-component.html',
  styleUrl: './tag-button-component.scss',
})
export class TagButtonComponent {
  @Input() text?: string;
  @Input() optionalText?:string;
  @Input() isSelected = false;
  @Input() clickable = true;

  @Output() selectedTag = new EventEmitter<string>();

  toggle() {
    this.selectedTag.emit(this.text);
  }
}
