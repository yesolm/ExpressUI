import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer  implements OnInit {
  currentYear: number = new Date().getFullYear();
  version: string = '1.0.0';

  constructor() { }

  ngOnInit(): void {
  }

}