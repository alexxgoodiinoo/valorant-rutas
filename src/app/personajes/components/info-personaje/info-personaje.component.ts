import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';
import { Ability, PersonajeSeleccionado } from '../../interfaces/personajeSeleccionado';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-info-personaje',
  templateUrl: './info-personaje.component.html',
  styles: ``
})
export class InfoPersonajeComponent implements OnInit{
  constructor(
    private activeRoute: ActivatedRoute,
    private servicio:PersonajesService,
    private router: Router,
  ){}

  public personajeSeleccionado?: PersonajeSeleccionado;
  public habilidadesPersonaje?: Ability[];

  ngOnInit(): void {
    this.activeRoute.params
    .pipe( switchMap(params => { 
      const id = params['uuid']; 
      return this.servicio.searchPersonajePorUuid(id); 
      }) 
    )
    .subscribe(personaje => {
      if(!personaje){
        return this.router.navigateByUrl('');
      }
      this.habilidadesPersonaje = personaje.data.abilities;
      return this.personajeSeleccionado = personaje;
    })
  }
}
