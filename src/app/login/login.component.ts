import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/users.service';
import { Observable } from 'rxjs';
import { UserLogged } from '../shared/interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export default class LoginComponent {
  public userLogged$! : Observable<UserLogged>;
  constructor(private router: Router, private userService: UserService) {

  }
  dni = '';
  password = '';

  onLogin(event: Event) {
    event.preventDefault();
    // User the service to loggin
    this.userLogged$ = this.userService.login(this.dni, this.password);
    this.userLogged$.subscribe(user => {
      console.log('User logged: ', user);
      if(user.rol === 'Solicitante'){
        user = {...user, dni:this.dni}
        this.userService.setUserLogged(user);
        this.router.navigate(['/solicitantes']);
        
      }
      else if(user.rol === 'Error' || user.rol === "Empleado"){
        user = {...user, nombre_usuario:"admintest", dni:this.dni}
        this.userService.setUserLogged(user);
        this.router.navigate(['/home']);
        
      }
      else{
        console.log('Login failed');
        console.log('DNI: ', this.dni);
        console.log('Password: ', this.password);
        //this.userService.setUserLogged(user);
        //this.router.navigate(['/home']);
        
      }
    })

    // if (this.dni === 'admin' && this.password === 'admin') {
    //   console.log('Login successful');
      
    //   this.router.navigate(['/home']);
    // }
    // else if(this.dni === 'user' && this.password === 'user'){
    //   console.log('Login successful');
    //   this.router.navigate(['/solicitantes']);
    // }
    // else{
    //   console.log('Login failed');
    //   console.log('DNI: ', this.dni);
    //   console.log('Password: ', this.password);
    // }
  }

}
