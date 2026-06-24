import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-delete-component',
  imports: [],
  templateUrl: './edit-delete-component.html',
  styleUrl: './edit-delete-component.scss',
})
export class EditDeleteComponent {
  @Input() editOrDelete: 'edit' | 'delete' = 'edit'
  selected = false;

  toggle(){
    this.selected = !this.selected;
  }
}
