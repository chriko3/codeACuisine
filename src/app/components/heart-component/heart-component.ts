import { Component } from '@angular/core';

@Component({
  selector: 'app-heart-component',
  imports: [],
  templateUrl: './heart-component.html',
  styleUrl: './heart-component.scss',
})
export class HeartComponent {
  selected = false;
  
  toggle(){
    this.selected = !this.selected;
  }
}
