import { Component, Input, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Datum2 } from '../../interfaces/personajes';
import { SharedModule } from "../../../shared/shared.module";
import { debounceTime, Subject } from 'rxjs';
import { PersonajeSeleccionado } from '../../interfaces/personajeSeleccionado';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: ``,
})
export class PersonajesComponent implements OnInit{
  constructor(private servicio:PersonajesService){}
  public personajes?: Datum2[];
  public personajeSeleccionado?: PersonajeSeleccionado;
  public isSeleccionado: boolean = false;
  public isLoading: boolean = false;
  public uuidRecibido: string = '';
  private debouncer:Subject<string> = new Subject<string>;

  ngOnInit(): void {
    this.servicio.searchPersonaje().subscribe(resultado => {
      this.personajes = resultado;
    })

    this.debouncer
      .pipe(
        debounceTime(2000)
      )
      .subscribe(
        (uuid) => (this.servicio
          .searchPersonajePorUuid(uuid)
          .subscribe((data) => {
            this.personajeSeleccionado = data;
            this.isLoading = false;
            this.isSeleccionado = true;
        }))
      )
  }

  @Input()
  onPersonajeChange(evento:Event){
    this.isLoading = true;
    this.uuidRecibido = (evento.target as HTMLSelectElement).value;
    this.debouncer.next(this.uuidRecibido);
  }
}