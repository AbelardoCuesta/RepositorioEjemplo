import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Album, AlbumCompartido, Cancion } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-list-compartir',
  templateUrl: './album-list-compartir.component.html',
  styleUrls: ['./album-list-compartir.component.css']
})
export class AlbumListCompartirComponent implements OnInit {

  constructor(
    private albumService: AlbumService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private routerPath: Router
  ) { }

  userId: number
  token: string
  albumes: Array<AlbumCompartido>
  mostrarAlbumes: Array<AlbumCompartido>
  albumSeleccionado: AlbumCompartido
  indiceSeleccionado: number

  ngOnInit(): void {
    if(!parseInt(this.router.snapshot.params.userId) || this.router.snapshot.params.userToken === " "){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.userId = parseInt(this.router.snapshot.params.userId)
      this.token = this.router.snapshot.params.userToken
      this.getAlbumes();
    }
  }

  getAlbumes():void{
    this.albumService.getAlbumesCompartidos(this.userId)
    .subscribe(albumes => {
      this.albumes = albumes
      this.mostrarAlbumes = albumes
      if(albumes.length>0){
        this.onSelect(this.mostrarAlbumes[0], 0)
      }
    },
    error => {
      console.log(error)
      if(error.statusText === "UNAUTHORIZED"){
        this.showWarning("Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if(error.statusText === "UNPROCESSABLE ENTITY"){
        this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else{
        this.showError("Ha ocurrido un error. " + error.message)
      }
    })

  }

  onSelect(a: AlbumCompartido, index: number){
    this.indiceSeleccionado = index
    this.albumSeleccionado = a
    /*this.albumService.getCancionesAlbum(a.id, this.token)
    .subscribe(canciones => {
      this.albumSeleccionado.canciones = canciones
      this.albumSeleccionado.interpretes = this.getInterpretes(canciones)
    },
    error =>{
      this.showError("Ha ocurrido un error, " + error.message)
    })*/
  }

  getInterpretes(canciones: Array<Cancion>): Array<string>{
    var interpretes: Array<string> = []
    canciones.map( c => {
      if(!interpretes.includes(c.interprete)){
        interpretes.push(c.interprete)
      }
    })
    return interpretes
  }

  buscarAlbum(busqueda: string){
    let albumesBusqueda: Array<AlbumCompartido> = []
    this.albumes.map( albu => {
      if( albu.album.titulo.toLocaleLowerCase().includes(busqueda.toLowerCase())){
        albumesBusqueda.push(albu)
      }
    })
    this.mostrarAlbumes = albumesBusqueda
  }

  showError(error: string){
    this.toastr.error(error, "Error de autenticación")
  }
  showWarning(warning: string){
    this.toastr.warning(warning, "Error de autenticación")
  }

}
