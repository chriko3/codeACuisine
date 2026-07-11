import { Component } from '@angular/core';

@Component({
  selector: 'app-heart-component',
  imports: [],
  templateUrl: './heart-component.html',
  styleUrl: './heart-component.scss',
})
export class HeartComponent {
  selected = false;

  /**
   * Toggles the selected state.
   * Changes the value from true to false or from false to true.
   */
  toggle() {
    this.selected = !this.selected;
  }
}
