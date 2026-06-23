import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-cuisine-component',
  imports: [],
  templateUrl: './single-cuisine-component.html',
  styleUrl: './single-cuisine-component.scss',
})
export class SingleCuisineComponent {
  @Input() title?:string;
}
