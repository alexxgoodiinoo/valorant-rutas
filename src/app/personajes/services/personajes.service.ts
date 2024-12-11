import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Resultado, Arma } from '../interfaces/armas';
import { Datum2, Personaje } from '../interfaces/personajes';
import { ArmaSeleccionada } from '../interfaces/armaSeleccionada';
import { PersonajeSeleccionado } from '../interfaces/personajeSeleccionado';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private apiPersonajes:string = 'https://valorant-api.com/v1/agents';
  private apiArmas:string = 'https://valorant-api.com/v1/weapons';
  constructor(private http:HttpClient) { }

  private getPersonajes (url:string): Observable<Datum2[]>{
    return this.http.get<Personaje>(url)
    .pipe(
        map(response => response.data),
        catchError(() => of([]))
    );
  }

  searchPersonaje(): Observable<Datum2[]>{
    const url = `${this.apiPersonajes}`;
    return this.getPersonajes(url);
  }

  searchPersonajePorUuid(uuid:string): Observable<PersonajeSeleccionado>{
    const url = `${this.apiPersonajes}/${uuid}`;
    return this.http.get<PersonajeSeleccionado>(url)
      .pipe(
        catchError(() => of())
      );
  }

  private getArmas (url:string): Observable<Arma[]>{
    return this.http.get<Resultado>(url)
    .pipe(
      map((response) => (response.data)),
      catchError(() => of([]))
    );
  }

  searchArmas(): Observable<Arma[]>{
    const url = `${this.apiArmas}`;
    return this.getArmas(url);
  }

  searchArmaPorUuid(uuid:string): Observable<ArmaSeleccionada>{
    const url = `${this.apiArmas}/${uuid}`;
    return this.http.get<ArmaSeleccionada>(url)
    .pipe(
      catchError(() => of())
    )
  }
}