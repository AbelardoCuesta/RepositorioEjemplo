import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cancion } from '../cancion';
import { CancionService } from '../cancion.service';


@Component({
  selector: 'app-cancion-compartir',
  templateUrl: './cancion-compartir.component.html',
  styleUrls: ['./cancion-compartir.component.css']
})
export class CancionCompartirComponent implements OnInit {

  compartirForm: FormGroup;
  userId: number;
  token: string;
  cancionId:number;
  cancionTitulo:string;
  usuariosAgregar:string;

  constructor(private cancionService: CancionService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken
    this.compartirForm = this.formBuilder.group({
      usuarios: ["", [Validators.required]]
    })
    this.cancionService.getCancion(this.router.snapshot.params.cancionId)
    .subscribe(cancion => {
      this.cancionId = cancion.id
      this.cancionTitulo = cancion.titulo
    })
  }

  compartirCancion(cancionCompartida: Cancion){

    this.usuariosAgregar=this.compartirForm.get('usuarios')?.value
    this.cancionService.compartirCancion(this.cancionId, this.usuariosAgregar,this.userId)
    .subscribe(cancion => {
      this.showSuccess(cancion)
      this.compartirForm.reset()
      this.routerPath.navigate([`/canciones/${this.userId}/${this.token}`])
    },
    error=> {
      console.log(error)
      console.log(error.message)
      if(error.statusText === "UNAUTHORIZED"){
        this.showWarning("Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if(error.statusText === "UNPROCESSABLE ENTITY"){
        this.showError("No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else{
        this.showError("Ha ocurrido un error. " + error.error)
      }
    })
  }

  cancelCompartir(){
    this.compartirForm.reset()
    this.routerPath.navigate([`/canciones/${this.userId}/${this.token}`])
  }

  showError(error: string){
    this.toastr.error(error, "Error")
  }

  showWarning(warning: string){
    this.toastr.warning(warning, "Error de autenticación")
  }

  showSuccess(cancion: Cancion) {
    this.toastr.success(`La canción ${this.cancionTitulo} fue compartida`, "Compartir exitoso");
  }

}
/*
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cancion } from '../cancion';
import { CancionService } from '../cancion.service';


@Component({
  selector: 'app-cancion-compartir',
  templateUrl: './cancion-compartir.component.html',
  styleUrls: ['./cancion-compartir.component.css']
})
export class CancionCompartirComponent implements OnInit {

  compartirForm: FormGroup;
  userId: number;
  token: string;
  cancionId:number;

  constructor(private cancionService: CancionService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken
    this.compartirForm = this.formBuilder.group({
      usuarios: ["", [Validators.required]]
    })
    this.cancionService.getCancion(this.router.snapshot.params.cancionId)
    .subscribe(cancion => {
      this.cancionId = cancion.id})
  }

  compartirCancion(cancionCompartida: Cancion){
    this.compartirForm.get('usuarios')?.setValue(parseInt(this.compartirForm.get('usuarios')?.value))
    this.cancionService.compartirCancion(this.cancionId, this.userId)
    .subscribe(cancion => {
      this.showSuccess(cancion)
      this.compartirForm.reset()
      this.routerPath.navigate([`/canciones/${this.userId}/${this.token}`])
    },
    error=> {
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

  cancelCompartir(){
    this.compartirForm.reset()
    this.routerPath.navigate([`/canciones/${this.userId}/${this.token}`])
  }

  showError(error: string){
    this.toastr.error(error, "Error")
  }

  showWarning(warning: string){
    this.toastr.warning(warning, "Error de autenticación")
  }

  showSuccess(cancion: Cancion) {
    this.toastr.success(`La canción ${cancion.titulo} fue compartida`, "Compartir exitoso");
  }

}*/
