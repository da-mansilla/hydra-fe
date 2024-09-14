import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export default class LoginComponent {
  constructor(private router: Router){

  }
  mail = '';
  password = '';

  onLogin(event: Event) {
    event.preventDefault();
    if (this.mail === 'admin' && this.password === 'admin') {
      console.log('Login successful');
      
      this.router.navigate(['/home']);
    }else{
      console.log('Login failed');
      console.log('Mail: ', this.mail);
      console.log('Password: ', this.password);
    }
  }

}
