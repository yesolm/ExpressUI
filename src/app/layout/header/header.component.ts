import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  profile: any = {};
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {    
    this.profile = this.authService.getMiniProfile();
  }

  logout() { this.authService.logout(); }

}



