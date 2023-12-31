import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private http: HttpClient) {
    console.log('Servicio funcionando');
  }

  public getDataAPI() {
    return this.http.get('https://rickandmortyapi.com/api/character/?page=1');
  }

  public getPersonajeAPI(id: number) {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id);
  }
}