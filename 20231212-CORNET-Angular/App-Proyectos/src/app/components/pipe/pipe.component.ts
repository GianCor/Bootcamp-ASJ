import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  input!: string;
  array: number[] = [];

  pushToArr(input: string) {
    const num = parseInt(input);
    if (!isNaN(num)) {
      this.array.push(num);
      console.log(this.array);
    } else {
      console.log('Input no es un número válido.');
    }
  }
}
