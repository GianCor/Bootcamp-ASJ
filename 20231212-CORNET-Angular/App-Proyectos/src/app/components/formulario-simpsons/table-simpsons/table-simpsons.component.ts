import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-simpsons',
  templateUrl: './table-simpsons.component.html',
  styleUrls: ['./table-simpsons.component.css']
})
export class TableSimpsonsComponent {
  @Input () characterList : any[] = []
}
