import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ArmasComponent } from './components/armas/armas.component';
import { InfoPersonajeComponent } from './components/info-personaje/info-personaje.component';
import { InfoArmaComponent } from './components/info-arma/info-arma.component';


export const routes: Routes = [
    {
        path: 'personajes',
        component: PersonajesComponent
    },
    {
        path: 'armas',
        component: ArmasComponent
    },
    {
        path:'byPersonaje/:uuid',
        component: InfoPersonajeComponent
    },
    {
        path:'byArma/:uuid',
        component: InfoArmaComponent
    },
    {
        path: '**',
        redirectTo: 'personajes'
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PersonajesRoutingModule { }