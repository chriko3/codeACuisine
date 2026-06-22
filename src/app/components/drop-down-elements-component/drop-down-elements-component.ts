import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drop-down-elements-component',
  imports: [],
  templateUrl: './drop-down-elements-component.html',
  styleUrl: './drop-down-elements-component.scss',
})
export class DropDownElementsComponent {
  @Input() text?:string;
}
