import { Component, EventEmitter, OnInit, Output } from '@angular/core'; // No OnDestroy needed if no subscriptions
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // <--- IMPORTANT: Add CommonModule for directives like *ngIf


@Component({
  selector: 'app-header',
  standalone: false, 
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit { 
@Output() sidebarToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSidebar(): void {
    this.sidebarToggle.emit();
  }
  logout(){
    
  }

}