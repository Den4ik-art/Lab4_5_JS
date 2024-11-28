import { Component } from '@angular/core';
import { arrayTwo } from '../Class/arrayTwo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-array-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-two.component.html',
  styleUrl: './array-two.component.css'
})
export class ArrayTwoComponent {
  arrayTwo: arrayTwo = new arrayTwo();

  calculate(N: string, M: string) {
    try {
      let n = parseInt(N);
      let m = parseInt(M);
      if (n > 0 && m >0)
      {
        this.arrayTwo.genArray(n, m);
        this.arrayTwo.find();
      }
    }
    catch {throw("Error N or M")}
  }
}
