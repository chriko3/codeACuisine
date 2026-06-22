import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chef-label-component',
  imports: [],
  templateUrl: './chef-label-component.html',
  styleUrl: './chef-label-component.scss',
})
export class ChefLabelComponent {
  @Input() chefs: 1| 2 | 3 | 4 = 1;
  chefAmount: number[] = [];

  ngOnInit() {
    for (let index = 0; index < this.chefs; index++) {
      this.chefAmount.push(this.chefs);
    }
  }
}
