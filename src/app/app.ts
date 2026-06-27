import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('codeACuisine');
  @HostListener('document:contextmenu', ['$event'])
  disableRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  @HostListener('document:mousedown', ['$event'])
  disableMiddleClick(event: MouseEvent) {
    if (event.button === 1) {
      event.preventDefault();
    }
  }
}
