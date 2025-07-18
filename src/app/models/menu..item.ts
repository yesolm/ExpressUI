// src/app/models/menu-item.model.ts

export interface MenuItem {
  label: string;
  icon: string;
  route?: string;
  badge?: {
    text: string;
    class: string;
  };
  children?: MenuItem[];
  isActive?: boolean;
  isOpen?: boolean;
}
