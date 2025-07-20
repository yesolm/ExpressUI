import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-qr-self-registration',
    templateUrl: './qr-self-registration.component.html',
    styleUrls: ['./qr-self-registration.component.css'],
    standalone: false
})
export class QrSelfRegistrationComponent implements OnInit {

  imageUrl: any;
  clientModel: any;
 constructor(private userService: UserService,private authService: AuthService,private qrCodeService: QrcodeService) { }

 ngOnInit(): void {
  var userId = this.authService.getUserId();
    this.userService.getUserProfile(userId)
      .subscribe(data => {
        this.clientModel = data.client
        this.qrCodeService.getRegistrationQrCode(data.client.uuid).subscribe(
          (response: any) => {
            const reader = new FileReader();
            reader.onload = () => {
              // Set the image URL after reading the stream
              this.imageUrl = reader.result;
            };
            reader.readAsDataURL(new Blob([response.body], { type: 'image/jpeg' }));
          },
          (error) => {
            console.error('Error fetching image:', error);
          }
        );
      }); 
 
}
}
