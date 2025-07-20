import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: false
})
export class LoginComponent {

  model: any = {}; 
  constructor(private router: Router, private authService: AuthService, private modal:ModalService) { }

  login() {
    this.authService.login(this.model)
    .subscribe(
        (data) => {
            console.log("User is logged in");
            this.authService.setUser(data.token);                  
            this.router.navigate(['/client']).then(() => window.location.reload());           
        },
        (error) =>{
          switch(error.status) {
            case 401: this.modal.showError('Invalid username or password'); break;
            default : this.modal.showError('Unknown error occured');
          }
        }
    );
    
  }
}
