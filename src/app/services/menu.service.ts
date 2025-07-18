// menu.service.ts
import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu..item';



@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      route: '/',
      isActive: true,
      isOpen: true,
      // children: [
      //   { label: 'Dashboard v1', icon: 'far fa-circle', route: '/login', isActive: true },
      //   { label: 'Dashboard v2', icon: 'far fa-circle', route: '/dashboard-v2' },
      //   { label: 'Dashboard v3', icon: 'far fa-circle', route: '/dashboard-v3' }
      // ]
    },
    // ...rest of your menu
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  resetActiveItems(items: MenuItem[]): void {
    items.forEach(item => {
      item.isActive = false;
      if (item.children) {
        this.resetActiveItems(item.children);
      }
    });
  }

  openParentIfChild(targetItem: MenuItem): void {
    this.menuItems.forEach(item => {
      if (item.children && item.children.includes(targetItem)) {
        item.isOpen = true;
      }
    });
  }
}
