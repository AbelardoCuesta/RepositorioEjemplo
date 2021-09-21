import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../album';
import { ComentarioService } from 'src/app/comentario/comentario.service'
import { Comentario } from 'src/app/comentario/comentario'
import { TipoComentario } from 'src/app/comentario/comentario'


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {

  @Input() album: Album;
  @Input() id: number;
  @Output() deleteAlbum = new EventEmitter();

  userId: number;
  token: string;
  comentariosAlbum: Array<Comentario>
  mostrarcomentariosAlbum: Array<Comentario>
  _tipoComentario: TipoComentario;

  constructor(
    private comentarioService: ComentarioService,
    private routerPath: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken
  }

  goToEdit(){
    this.routerPath.navigate([`/albumes/edit/${this.album.id}/${this.userId}/${this.token}`])
  }

  goToJoinCancion(){
    this.routerPath.navigate([`/albumes/join/${this.album.id}/${this.userId}/${this.token}`])
  }

  eliminarAlbum(){
    this.deleteAlbum.emit(this.album.id)
  }

  goToCompartir(){
    this.routerPath.navigate([`/albumes/compartir/${this.album.id}/${this.userId}/${this.token}`])
  }

  crearComentario(){
    this.routerPath.navigate([`/albumes/comentario/${this.album.id}/${this.userId}/${this.token}`])
  }
}
