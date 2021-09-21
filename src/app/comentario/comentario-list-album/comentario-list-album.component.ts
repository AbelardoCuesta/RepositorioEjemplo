import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comentario, TipoComentario } from '../comentario';
import { ComentarioService } from '../comentario.service';
import {Album} from 'src/app/album/album';
@Component({
  selector: 'app-comentario-list-album',
  templateUrl: './comentario-list-album.component.html',
  styleUrls: ['./comentario-list-album.component.css']
})
export class ComentarioListAlbumComponent implements OnInit {
  _userId: number;
  _token: string;
  _idRelacion: number;
  _tipoComentario: TipoComentario;
  //_album:Album;
  comentariosAlbum: Array<Comentario>
  mostrarcomentariosAlbum: Array<Comentario>


  @Input() _album: Album;

  /*@Input() set album(value: Album) {
    this._album = value;
    console.log(this._album.id)
  }*/

  @Input() set userId(value: number) {
    this._userId = value;
  }
  @Input() set token(value: string) {
    this._token = value;
  }

  @Input() idRelacion: number;

  @Input() set tipoComentario(value: string) {
    if (value == 'Album') {
      this._tipoComentario = TipoComentario.Album;
    } else if (value == 'Cancion') {
      {
        this._tipoComentario = TipoComentario.Cancion;
      }
    }
  }

  constructor(
    private comentarioService: ComentarioService,
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken
  }


  getComentarios(albumId:number,tipo:TipoComentario):void{

    this.comentarioService.getComentariosAlbum(albumId, tipo)
    .subscribe(comentariosAlbum => {
      this.comentariosAlbum = comentariosAlbum
      this.mostrarcomentariosAlbum = comentariosAlbum
    })
  }

}
