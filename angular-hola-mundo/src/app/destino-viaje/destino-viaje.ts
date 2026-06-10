import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { DestinosViaje } from '../models/destino-viaje.model';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-destino-viaje',
  imports: [CommonModule, RouterOutlet, RouterLink,],
  templateUrl: './destino-viaje.html',
  styleUrl: './destino-viaje.css',
})
export class DestinoViaje implements OnInit{
  @Input() destino!: DestinosViaje;
  @Input('idx') position!: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<DestinosViaje>;
  
  constructor() {
    this.clicked = new EventEmitter();
  }
  ngOnInit(): void {
  }

  ir(){
    this.clicked.emit(this.destino);
    return false;
  }
}
