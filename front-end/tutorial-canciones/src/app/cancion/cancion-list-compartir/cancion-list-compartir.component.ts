import { Component, OnInit } from '@angular/core';
import { Cancion } from '../cancion';
import { CancionService } from '../cancion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cancion-list-compartir',
  templateUrl: './cancion-list-compartir.component.html',
  styleUrls: ['./cancion-list-compartir.component.css']
})
export class CancionListCompartirComponent implements OnInit {

  constructor(
    private cancionService: CancionService,
    private routerPath: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  userId: number
  token: string
  cancionesCompartidas: Array<Cancion>
  mostrarCancionesCompartidas: Array<Cancion>
  cancionSeleccionada: Cancion
  indiceSeleccionado: number = 0

  ngOnInit() {
    if(!parseInt(this.router.snapshot.params.userId) || this.router.snapshot.params.userToken === " "){
      this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
    }
    else{
      this.userId = parseInt(this.router.snapshot.params.userId)
      this.token = this.router.snapshot.params.userToken
      this.getCancionesCompartidas();
    }
  }

  getCancionesCompartidas():void{
    this.cancionService.getCancionesCompartidas(this.userId)
    .subscribe(cancionesCompartidas => {
      this.cancionesCompartidas = cancionesCompartidas
      this.mostrarCancionesCompartidas = cancionesCompartidas
      this.onSelect(this.mostrarCancionesCompartidas[0], 0)
      console.log(this.cancionesCompartidas)
    })
  }

  onSelect(cancion: Cancion, indice: number){
    this.indiceSeleccionado = indice
    this.cancionSeleccionada = cancion
    this.cancionService.getAlbumesCancion(cancion.id)
    .subscribe(albumes => {
      this.cancionSeleccionada.albumes = albumes
    },
    error => {
      this.showError(`Ha ocurrido un error: ${error.message}`)
    })

  }

  buscarCancion(busqueda: string){
    let cancionesBusqueda: Array<Cancion> = []
    this.cancionesCompartidas.map( cancion => {
      if(cancion.titulo.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())){
        cancionesBusqueda.push(cancion)
      }
    })
    this.mostrarCancionesCompartidas = cancionesBusqueda
  }

  showError(error: string){
    this.toastr.error(error, "Error de autenticación")
  }



}
