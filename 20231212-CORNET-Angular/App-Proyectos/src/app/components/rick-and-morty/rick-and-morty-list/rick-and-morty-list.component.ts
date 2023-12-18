import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty-list',
  templateUrl: './rick-and-morty-list.component.html',
  styleUrls: ['./rick-and-morty-list.component.css']
})
export class RickAndMortyListComponent {

  datos: any = [];

  personajes: any = [];

  constructor(public miServicio: RickAndMortyService) {}

  ngOnInit(): void {

    this.personajes = this.miServicio.getDataAPI().subscribe((data) => {
      console.log(data); //info: {}, results: [{},{},{}]
      this.personajes = data;
    });
  }
}
