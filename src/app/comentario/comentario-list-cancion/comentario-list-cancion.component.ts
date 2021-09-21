import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comentario, TipoComentario } from '../comentario';
import { ComentarioService } from '../comentario.service';
import {Album} from 'src/app/album/album';
import { Cancion } from 'src/app/cancion/cancion'

@Component({
  selector: 'app-comentario-list-cancion',
  templateUrl: './comentario-list-cancion.component.html',
  styleUrls: ['./comentario-list-cancion.component.css']
})
export class ComentarioListCancionComponent implements OnInit {
  _userId: number;
  _token: string;
  _idRelacion: number;
  _tipoComentario: TipoComentario;
  comentariosCancion: Array<Comentario>
  mostrarcomentariosCancion: Array<Comentario>

  @Input() _cancion: Cancion;

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
    }
    else if (value == 'Cancion') {
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
  }

}
