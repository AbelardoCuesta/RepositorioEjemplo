import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-album-comentario',
  templateUrl: './album-comentario.component.html',
  styleUrls: ['./album-comentario.component.css']
})
export class AlbumComentarioComponent implements OnInit {

  userId: number
  token: string
  albumId: number
  nombreAlbum: string

  constructor(
    private albumService: AlbumService,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    if( !parseInt(this.router.snapshot.params.albumId) || !parseInt(this.router.snapshot.params.userId) || this.router.snapshot.params.userToken === " " ){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.userId = parseInt(this.router.snapshot.params.userId)
      this.token = this.router.snapshot.params.userToken
      this.albumService.getAlbum(this.router.snapshot.params.albumId)
      .subscribe(album => {
        this.albumId = album.id,
        this.nombreAlbum = album.titulo
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
