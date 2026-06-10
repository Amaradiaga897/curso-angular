import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinoViaje } from '../destino-viaje/destino-viaje';
import { DestinosViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  standalone: true,
  imports: [CommonModule, DestinoViaje],
  templateUrl: './lista-destinos.html',
  styleUrl: './lista-destinos.css',
})
export class ListaDestinos {
  destinos: DestinosViaje[];
  constructor() {
    this.destinos = [];
  }

  ngOnInit() {}

  guardar(nombre: string, url: string): boolean {
    this.destinos.push(new DestinosViaje(nombre, url));
    console.log(this.destinos);
    return false;
  }

  elegido(d: DestinosViaje){
    this.destinos.forEach(function(x){x.setSelected(false);});
    d.setSelected(true);
  }
}
