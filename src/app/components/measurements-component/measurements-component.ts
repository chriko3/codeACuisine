import { Component, Output, Input, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-measurements-component',
  imports: [],
  templateUrl: './measurements-component.html',
  styleUrl: './measurements-component.scss',
})
export class MeasurementsComponent {
  rotate = false;
  @Input() selectedValue = 'gram';

  @Output() selectedSend = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {}

  /**
   * Toggles the rotate state.
   * Changes the value from true to false or from false to true.
   */
  toggle() {
    this.rotate = !this.rotate;
  }

  /**
   * Saves the selected value.
   * Emits the selection to the listener.
   */
  select(selection: string) {
    this.selectedValue = selection;
    this.selectedSend.emit(selection);
    this.rotate = false;
  }

  /**
   * Detects clicks outside the component.
   * Closes the dropdown if the click happens outside.
   */
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.rotate = false;
    }
  }
}
