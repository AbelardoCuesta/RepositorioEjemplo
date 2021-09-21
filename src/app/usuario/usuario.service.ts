import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioService {

    private backUrl: string = "http://localhost:5000";
    private loggedIn = new BehaviorSubject<boolean>(false);
    private username =  new BehaviorSubject<string>("");

    get isLoggedIn() {
      return this.loggedIn.asObservable();
    }

    get getUsername() {
      return this.username.asObservable();
    }
    constructor(private http: HttpClient) { }

    successLogin(){
      this.loggedIn.next(true);
    }

    /** Validates the session of the user. */
    isAuthenticated(): boolean {
      const authenticated = localStorage.getItem('authenticated') === 'true';
      return authenticated;
    }

    /** Removes the session of the user. */
    userLogOut(){
    this.loggedIn.next(false);
    this.username.next("");
    localStorage.setItem('username', '');
    localStorage.setItem('authenticated', 'false');
    }

    userLogIn(nombre: string, contrasena: string):Observable<any>{
        this.username.next(nombre);
        return this.http.post<any>(`${this.backUrl}/logIn`, {"nombre": nombre, "contrasena": contrasena });
    }

    userSignUp(nombre: string, contrasena: string): Observable<any>{
        return this.http.post<any>(`${this.backUrl}/signin`, {"nombre": nombre, "contrasena": contrasena})
    }
}
