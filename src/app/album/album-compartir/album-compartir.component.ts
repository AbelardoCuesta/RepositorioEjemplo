import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-compartir',
  templateUrl: './album-compartir.component.html',
  styleUrls: ['./album-compartir.component.css']
})
export class AlbumCompartirComponent implements OnInit {

  userId: number
  token: string
  compartirForm: FormGroup

  constructor(
    private albumService: AlbumService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private routerPath: Router
  ) {

  }

  ngOnInit(): void {
    this.userId = parseInt(this.router.snapshot.params.userId)
    this.token = this.router.snapshot.params.userToken
    this.compartirForm = this.formBuilder.group({
      titulo: ["", [Validators.required]],
    })
  }

  compartirAlbum(compartirAlbum: Album){
    this.albumService.compartirAlbum(this.userId, this.router.snapshot.params.albumId)
    .subscribe(album => {
      this.showSuccess(album)
      this.compartirForm.reset()
      this.routerPath.navigate([`/albumes/${this.userId}/${this.token}`])
    })
  }

  showError(error: string){
    this.toastr.error(error, "Error")
  }

  showSuccess(album: Album) {
    this.toastr.success(`El album ${album.titulo} fue compartido exitosamente!`, "Compartir exitoso");
  }

  cancelCompartir(){
    this.compartirForm.reset()
    this.routerPath.navigate([`/albumes/${this.userId}/${this.token}`])
  }

}
