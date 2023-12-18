import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../../services/rick-and-morty.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rick-and-morty-details',
  templateUrl: './rick-and-morty-details.component.html',
  styleUrls: ['./rick-and-morty-details.component.css']
})
export class RickAndMortyDetailsComponent implements OnInit {
  characters: any = [];
  idCharacter: any;
  character: any ={}

  constructor(
    private miServicio: RickAndMortyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idCharacter = this.route.snapshot.paramMap.get('idCharacter');
    console.log(this.idCharacter)

    this.characters = this.miServicio.getPersonajeAPI(this.idCharacter).subscribe((data) => {
      this.character=data
      console.log(data)
    });
  }
}