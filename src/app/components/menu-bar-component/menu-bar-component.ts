import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-component',
  imports: [],
  templateUrl: './menu-bar-component.html',
  styleUrl: './menu-bar-component.scss',
})
export class MenuBarComponent {
  @Input() color: 'green' | 'white' = 'green';
  @Input() displayArrow: true | false = false;
}
