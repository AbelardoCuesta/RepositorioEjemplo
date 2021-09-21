import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, AlbumCompartido} from './album';
import { Cancion } from '../cancion/cancion';
import { Comentario,TipoComentario } from 'src/app/comentario/comentario';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private backUrl: string = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  getAlbumes(usuario: number, token: string): Observable<Album[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Album[]>(`${this.backUrl}/usuario/${usuario}/albumes`, {headers: headers})
  }

  getCancionesAlbum(idAlbum: number, token: string): Observable<Cancion[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.get<Cancion[]>(`${this.backUrl}/album/${idAlbum}/canciones`, {headers: headers})
  }

  crearAlbum(idUsuario: number, token: string, album: Album):Observable<Album>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.post<Album>(`${this.backUrl}/usuario/${idUsuario}/albumes`, album, {headers: headers})
  }

  getAlbum(albumId: number): Observable<Album>{
    return this.http.get<Album>(`${this.backUrl}/album/${albumId}`)
  }

  editarAlbum(idUsuario: number, token: string, albumId: number, album: Album): Observable<Album>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.put<Album>(`${this.backUrl}/album/${albumId}`, album, {headers: headers})
  }

  eliminarAlbum(idUsuario: number, token: string, albumId: number): Observable<Album>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this.http.delete<Album>(`${this.backUrl}/album/${albumId}`, {headers: headers})
  }

  asociarCancion(albumId: number, cancionId: number): Observable<Cancion>{
    return this.http.post<Cancion>(`${this.backUrl}/album/${albumId}/canciones`, {"id_cancion": cancionId})
  }

  compartirAlbum(usuariosCompatir: string, albumId: number):Observable<Album>{
    let usuarios: { user: string; }[] = []
    usuariosCompatir.split(',').forEach (usuario =>
      usuarios.push({"user": usuario})
    )
    return this.http.post<Album>(
      `${this.backUrl}/compartir/album/${albumId}`, {"users_compartir":  usuarios}
    );
  }

  getAlbumesCompartidos(usuario: number): Observable<AlbumCompartido[]>{
    return this.http.get<AlbumCompartido[]>(`${this.backUrl}/compartir/${usuario}/albumes`)
  }

  getComentariosAlbum(idRelacion : number, tipoComentario: TipoComentario):Observable<Comentario[]>{
    return this.http.get<Comentario[]>(`${this.backUrl}/comentarios/${idRelacion}/${tipoComentario}`)
  }

}