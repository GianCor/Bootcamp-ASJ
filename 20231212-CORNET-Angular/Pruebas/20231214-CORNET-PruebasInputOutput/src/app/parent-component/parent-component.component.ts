import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent {
  dato:string = "HolaHijo"

  msjContenido:string ="";

  recibirMensaje(msj:string){
    this.msjContenido = msj
  }
}
