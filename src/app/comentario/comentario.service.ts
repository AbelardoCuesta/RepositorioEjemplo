import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario, TipoComentario } from './comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private backUrl: string = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  
  crearComentario(comentario: Comentario, idRelacion : number, tipoComentario: TipoComentario):Observable<Comentario>{
    return this.http.post<Comentario>(`${this.backUrl}/comentario/${idRelacion}/${tipoComentario}`, comentario)
  }

}