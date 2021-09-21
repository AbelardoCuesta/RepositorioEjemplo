import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CancionService } from '../cancion.service';


@Component({
  selector: 'app-cancion-comentario',
  templateUrl: './cancion-comentario.component.html',
  styleUrls: ['./cancion-comentario.component.css']
})
export class CancionComentarioComponent implements OnInit {

  userId: number
  token: string
  cancionId: number
  nombreCancion: string

  constructor(
    private cancionService: CancionService,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    if( !parseInt(this.router.snapshot.params.cancionId) || !parseInt(this.router.snapshot.params.userId) || this.router.snapshot.params.userToken === " " ){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.userId = parseInt(this.router.snapshot.params.userId)
      this.token = this.router.snapshot.params.userToken
      this.cancionService.getCancion(this.router.snapshot.params.cancionId)
      .subscribe(cancion => {
        this.cancionId = cancion.id,
        this.nombreCancion = cancion.titulo
      })
    }
  }

  
  showError(error: string){
    this.toastr.error(error, "Error")
  }

  showWarning(warning: string){
    this.toastr.warning(warning, "Error de autenticación")
  }

  showSuccess() {
    this.toastr.success(`El comentario fue creado`, "Creación exitosa");
  }

}
