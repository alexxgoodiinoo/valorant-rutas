import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArmaSeleccionada, DamageRange, Skin } from '../../interfaces/armaSeleccionada';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-info-arma',
  templateUrl: './info-arma.component.html',
  styles: ``
})
export class InfoArmaComponent implements OnInit{
  constructor(
    private activeRoute: ActivatedRoute,
    private servicio:PersonajesService,
    private router: Router,
  ){}

  public armaSeleccionada?: ArmaSeleccionada;
  public skinArma?: Skin[];

  ngOnInit(): void {
    this.activeRoute.params
    .pipe( switchMap(params => { 
      const id = params['uuid'];
      return this.servicio.searchArmaPorUuid(id); 
      }) 
    )
    .subscribe(arma => {
      if(!arma){
        return this.router.navigateByUrl('');
      }
      this.skinArma = arma.data.skins;
      return this.armaSeleccionada = arma;
    })
  }
}