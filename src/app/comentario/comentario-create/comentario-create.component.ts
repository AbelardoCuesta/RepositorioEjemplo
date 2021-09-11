import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comentario, TipoComentario } from '../comentario';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentario-create',
  templateUrl: './comentario-create.component.html',
  styleUrls: ['./comentario-create.component.css'],
})
export class ComentarioCreateComponent implements OnInit {
  _userId: number;
  _token: string;
  _idRelacion: number;
  _tipoComentario: TipoComentario;

  @Input() set userId(value: number) {
    this._userId = value;
  }
  @Input() set token(value: string) {
    this._token = value;
  }
  @Input() set idRelacion(value: number) {
    this._idRelacion = value;
  }
  @Input() set tipoComentario(value: string) {
    if (value == 'Album') {
      this._tipoComentario = TipoComentario.Album;
    } else if (value == 'Cancion') {
      {
        this._tipoComentario = TipoComentario.Cancion;
      }
    }
  }
  comentarioForm: FormGroup;

  constructor(
    private comentarioService: ComentarioService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    if ( this._userId == 0 || this._token === ' '
    ) {
      this.showError(
        'No hemos podido identificarlo, por favor vuelva a iniciar sesión.'
      );
    } else {  
      this.comentarioForm = this.formBuilder.group({
        comentario: ['', [Validators.required, Validators.maxLength(1000)]],
      });
    }
  }

  createComentario(newComentario: Comentario) {
    newComentario.id_usuario = this._userId;
    this.comentarioService
      .crearComentario(newComentario, this._idRelacion, this._tipoComentario)
      .subscribe(
        (comentario) => {
          this.showSuccess(comentario);
          this.comentarioForm.reset();
          if (this._tipoComentario == TipoComentario.Album) {
            this.routerPath.navigate([`/albumes/${this._userId}/${this._token}`]);
          } else if (this._tipoComentario == TipoComentario.Cancion) {
            this.routerPath.navigate([`/canciones/${this._userId}/${this._token}`]);
          }
        },
        (error) => {
          if (error.statusText === 'UNAUTHORIZED') {
            this.showWarning(
              'Su sesión ha caducado, por favor vuelva a iniciar sesión.'
            );
          } else if (error.statusText === 'UNPROCESSABLE ENTITY') {
            this.showError(
              'No hemos podido identificarlo, por favor vuelva a iniciar sesión.'
            );
          } else {
            this.showError('Ha ocurrido un error. ' + error.message);
          }
        }
      );
  }

  cancelCreate() {
    this.comentarioForm.reset();
    if (this._tipoComentario == TipoComentario.Album) {
      this.routerPath.navigate([`/albumes/${this._userId}/${this._token}`]);
    } else if (this._tipoComentario == TipoComentario.Cancion) {
      this.routerPath.navigate([`/canciones/${this._userId}/${this._token}`]);
    }
  }

  showError(error: string) {
    this.toastr.error(error, 'Error');
  }

  showWarning(warning: string) {
    this.toastr.warning(warning, 'Error de autenticación');
  }

  showSuccess(comentario: Comentario) {
    this.toastr.success(`El comentario fue creado`, 'Creación exitosa');
  }
}
