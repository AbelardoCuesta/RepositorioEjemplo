import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
    private userService: UsuarioService
    ) { }

    isLoggedIn$: Observable<boolean>;
    username$: Observable<string>;


  ngOnInit(): void {
    this.isLoggedIn$ = this.userService.isLoggedIn;
    this.username$ = this.userService.getUsername;
    console.log (this.username$);
   }

  goTo(menu: string){
    //const userId = parseInt(this.router.snapshot.params.userId)
    //const token = this.router.snapshot.params.userToken
    const userId = localStorage.getItem('user');
    const token =  localStorage.getItem('token');
    if(menu === "logIn"){
      this.routerPath.navigate([`/signin`])
    }
    else if(menu === "logOut"){
      this.userService.userLogOut();
      this.routerPath.navigate([`/`]);
      //this.matSnackBar.open('La sesión del usuario ha finalizado', 'Cerrar', { duration: 3000 });
    }
    else if(menu === "album"){
      this.routerPath.navigate([`/albumes/${userId}/${token}`])
    }
    else if(menu === "albumesCompartidos"){
      this.routerPath.navigate([`/albumes/compartir/${userId}/${token}`])
    }
    else if(menu === "acerca"){
      this.routerPath.navigate([`/acerca/${userId}/${token}`])
    }
    else if(menu === "cancionCompartida"){
      this.routerPath.navigate([`/canciones/compartir/${userId}/${token}`])
    }
    else{
      this.routerPath.navigate([`/canciones/${userId}/${token}`])
    }
  }

}
