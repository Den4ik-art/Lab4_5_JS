import { Component } from '@angular/core';
import { arrayOne } from '../Class/arrayOne';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-array-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-one.component.html',
  styleUrl: './array-one.component.css'
})
export class ArrayOneComponent {
  arrayOne: arrayOne = new arrayOne();

  calculate() {
    this.arrayOne.genArray();
  }
}
