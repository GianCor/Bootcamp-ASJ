import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-simpsons',
  templateUrl: './formulario-simpsons.component.html',
  styleUrls: ['./formulario-simpsons.component.css'],
})
export class FormularioSimpsonsComponent {
  name: string = '';
  description: string = '';
  url: string = '';
  characterList: any[] = [];

  addCharacter() {
    this.characterList.push({
      name: this.name,
      description: this.description,
      url: this.url,
    });
    this.name = '';
    this.description = '';
    this.url = '';
  }
}
