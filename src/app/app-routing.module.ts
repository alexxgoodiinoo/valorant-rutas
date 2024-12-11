import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agents',
    loadChildren: () => import('./personajes/personajes.module').then(p => p.PersonajesModule)
  },
  {
    path: '**',
    redirectTo: 'agents'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
