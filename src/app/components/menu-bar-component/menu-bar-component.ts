import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-bar-component',
  imports: [RouterLink],
  templateUrl: './menu-bar-component.html',
  styleUrl: './menu-bar-component.scss',
})
export class MenuBarComponent {
  @Input() color: 'green' | 'white' = 'green';
  @Input() displayArrow: true | false = false;
  @Input() text?:string;
  
}
