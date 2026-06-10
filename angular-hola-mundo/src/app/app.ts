import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DestinoViaje } from './destino-viaje/destino-viaje';
import { ListaDestinos } from './lista-destinos/lista-destinos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DestinoViaje, ListaDestinos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-hola-mundo');
}
