import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DestinosViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  imports: [],
  templateUrl: './destino-viaje.html',
  styleUrl: './destino-viaje.css',
})
export class DestinoViaje implements OnInit{
  @Input()
  destino!: DestinosViaje;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  constructor() {
    
  }
  ngOnInit(): void {
  }
}
