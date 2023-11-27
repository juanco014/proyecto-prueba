import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sala} from "../model/sala";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private baseUrl: String = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {

  }

  /**
   * Metodo que obtiene los cursos
   * @returns Observable<Curso[]> Lista de cursos
   */
  getSalas(): Observable<Sala[]> {
    return this.httpClient.get<Sala[]>(this.baseUrl + "/salaes")
      .pipe(
        map((result: any) => {
          console.log(result._embedded.salaes);
          return result._embedded.salaes;
        }));
  }

  /**
   * Metodo que obtiene un curso
   */
  getSala(idSala: number): Observable<Sala> {
    return this.httpClient.get<Sala>(this.baseUrl + '/salaes/' + idSala);
  }

  /**
   * Metodo que crea un curso
   * @param sala
   */
  crearSala(sala: Sala): Observable<Sala> {
    return this.httpClient.post<Sala>(this.baseUrl + "/salaes", Sala);
  }

  /**
   * Metodo que edita un curso
   * @param sala
   */
  editarSala(sala: Sala): Observable<Sala> {
    return this.httpClient.put<Sala>(this.baseUrl + "/salaes/" + sala.id, sala);
  }

  /**
   * Metodo que elimina un curso
   */
  borrarSala(idSala: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/salaes/" + idSala);
  }
}
