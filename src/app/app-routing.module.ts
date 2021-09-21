import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumCreateComponent } from './album/album-create/album-create.component';
import { AlbumEditComponent } from './album/album-edit/album-edit.component';
import { CancionListComponent } from './cancion/cancion-list/cancion-list.component';
import { CancionCreateComponent } from './cancion/cancion-create/cancion-create.component';
import { CancionEditComponent } from './cancion/cancion-edit/cancion-edit.component';
import { AlbumJoinCancionComponent } from './album/album-join-cancion/album-join-cancion.component';
import { UsuarioSignupComponent } from './usuario/usuario-signup/usuario-signup.component';
import { AuthGuardService } from './auth-guard.service';
import { AlbumCompartirComponent } from './album/album-compartir/album-compartir.component';
import { AlbumListCompartirComponent } from './album/album-list-compartir/album-list-compartir.component';
import { CancionCompartirComponent } from './cancion/cancion-compartir/cancion-compartir.component';
import { CancionListCompartirComponent } from './cancion/cancion-list-compartir/cancion-list-compartir.component';
import { AlbumComentarioComponent } from './album/album-comentario/album-comentario.component';
import { AcercaComponent } from './acerca-de/acerca/acerca.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: UsuarioLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: UsuarioSignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'acerca/:userId/:userToken',
    component: AcercaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'albumes/:userId/:userToken',
    component: AlbumListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'albumes/create/:userId/:userToken',
    component: AlbumCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'albumes/edit/:albumId/:userId/:userToken',
    component: AlbumEditComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'albumes/join/:albumId/:userId/:userToken',
    component: AlbumJoinCancionComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'albumes/compatir/:albumId/:userId/:userToken',
    component: AlbumCompartirComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'albumes/compartir/:userId/:userToken',
    component: AlbumListCompartirComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'canciones/:userId/:userToken',
    component: CancionListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'canciones/create/:userId/:userToken',
    component: CancionCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'canciones/edit/:cancionId/:userId/:userToken',
    component: CancionEditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'canciones/compartir/:cancionId/:userId/:userToken',
    component: CancionCompartirComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'canciones/compartir/:userId/:userToken',
    component: CancionListCompartirComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'albumes/comentario/:albumId/:userId/:userToken',
    component: AlbumComentarioComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
