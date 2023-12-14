import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input () dato: any;
  @Output() mensaje: EventEmitter<string>;
  constructor(){
    this.mensaje = new EventEmitter();
  }
  enviarMensaje(){
    this.mensaje.emit("Hola pa")
  }
}
