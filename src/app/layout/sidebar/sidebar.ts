// src/app/components/sidebar/sidebar.component.ts

import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu..item';


@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }

  toggleMenuItem(item: MenuItem): void {
    if (item.children) {
      item.isOpen = !item.isOpen;
    }
  }

  setActiveItem(item: MenuItem): void {
    this.menuService.resetActiveItems(this.menuItems);
    item.isActive = true;
    this.menuService.openParentIfChild(item);
  }
}
