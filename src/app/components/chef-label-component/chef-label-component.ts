import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chef-label-component',
  imports: [],
  templateUrl: './chef-label-component.html',
  styleUrl: './chef-label-component.scss',
})
export class ChefLabelComponent {
  @Input() chef = 0;
  chefAmount: number[] = [1,2,3,4];

  ngOnInit() {
    // for (let index = 0; index < this.chefs; index++) {
    //   this.chefAmount.push(this.chefs);
    // }
  }
}
