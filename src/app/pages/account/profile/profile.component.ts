import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userModel: any = {}
  changePasswordModel: any = {}
  constructor(private userService: UserService, private authService: AuthService,private modal:ModalService) { }

  ngOnInit(): void {
    var userId = this.authService.getUserId();
    this.userService.getUserProfile(userId)
      .subscribe(data => {
        this.userModel = data.user
      });
  }

  updateProfile() {
    this.userService.updateUser(this.userModel)
    .subscribe(
        (data) => {
          this.modal.showSuccess('User profile saved successfully.'); 
          this.userModel = data;                   
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
