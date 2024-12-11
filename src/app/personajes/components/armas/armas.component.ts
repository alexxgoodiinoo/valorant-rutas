import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Resultado, Arma } from '../../interfaces/armas';
import { PersonajesService } from '../../services/personajes.service';
import { ArmaSeleccionada } from '../../interfaces/armaSeleccionada';
import { debounceTime, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styles: ``,
})
export class ArmasComponent implements OnInit{
  constructor(private servicio: PersonajesService) {}
  public armas?: Arma[];
  public armaSeleccionada?: ArmaSeleccionada;
  public isSeleccionado: boolean = false;
  public isLoading: boolean = false;
  public uuidRecibidio: string = '';
  private debouncer:Subject<string> = new Subject<string>;

  ngOnInit(): void {
    this.servicio.searchArmas().subscribe((resultado)=>{
      this.armas = resultado;
    })

    this.debouncer
      .pipe(
        debounceTime(2000)
      )
      .subscribe(
        (uuid) => (this.servicio
          .searchArmaPorUuid(uuid)
          .subscribe((data) => {
            this.armaSeleccionada = data;
            this.isSeleccionado = true;
            this.isLoading = false;
          }))
      )
  }

  @Input()
  onArmaChange(evento:Event){
    this.isLoading = true;
    this.uuidRecibidio = (evento.target as HTMLSelectElement).value;
    this.debouncer.next(this.uuidRecibidio);
  }
}