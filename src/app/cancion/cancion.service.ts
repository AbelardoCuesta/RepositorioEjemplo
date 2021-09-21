import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cancion } from './cancion';
import { Album } from '../album/album';
import { Comentario,TipoComentario } from 'src/app/comentario/comentario';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  private backUrl: string = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  getCancionesAlbum(idAlbum: number, token: string): Observable<Cancion[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Cancion[]>(`${this.backUrl}/album/${idAlbum}/canciones`, {headers: headers})
  }

  getCanciones(usuarioId: number): Observable<Cancion[]>{
    return this.http.get<Cancion[]>(`${this.backUrl}/canciones/${usuarioId}`)
  }

  getAlbumesCancion(cancionId: number): Observable<Album[]>{
    return this.http.get<Album[]>(`${this.backUrl}/cancion/${cancionId}/albumes`)
  }

  crearCancion(cancion: Cancion, usuarioId : number):Observable<Cancion>{
    return this.http.post<Cancion>(`${this.backUrl}/canciones/${usuarioId}`, cancion)
  }

  getCancion(cancionId: number): Observable<Cancion>{
    return this.http.get<Cancion>(`${this.backUrl}/cancion/${cancionId}`)
  }

  editarCancion(cancion: Cancion, cancionId: number):Observable<Cancion>{
    return this.http.put<Cancion>(`${this.backUrl}/cancion/${cancionId}`, cancion)
  }

  eliminarCancion(cancionId: number): Observable<Cancion>{
    return this.http.delete<Cancion>(`${this.backUrl}/cancion/${cancionId}`)
  }

  compartirCancion(cancionId: number, usuariosAgregar : string, userId:number):Observable<Cancion>{
    return this.http.post<Cancion>(`${this.backUrl}/compartir/cancion/${userId}`, {"usuariosAgregar": usuariosAgregar,"id_cancion":cancionId})
  }

  getCancionesCompartidas(userId: number): Observable<Cancion[]>{
    return this.http.get<Cancion[]>(`${this.backUrl}/compartir/cancion/${userId}`)
  }

  getComentariosCancion(idRelacion : number, tipoComentario: TipoComentario):Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.backUrl}/comentarios/${idRelacion}/${tipoComentario}`)
  }




/*
  compartirCancion(cancionId: number, usuarioId : number):Observable<Cancion>{
    return this.http.post<Cancion>(`${this.backUrl}/compartir/cancion/${cancionId}`, {"id_usuario": usuarioId})
  }*/


}
