import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesRoutingModule } from './personajes.routing.module';
import { ArmasComponent } from './components/armas/armas.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { InfoArmaComponent } from './components/info-arma/info-arma.component';
import { InfoPersonajeComponent } from './components/info-personaje/info-personaje.component';

@NgModule({
  declarations: [
    ArmasComponent,
    PersonajesComponent,
    InfoArmaComponent,
    InfoPersonajeComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class PersonajesModule { }