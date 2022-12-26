import { Injectable } from '@angular/core';
import { NavItemDto } from '../../dto/nav-item';
import { NavMenuDto } from '../../dto/nav-menu';

@Injectable({
  providedIn: 'root',
})
export class SidenaveService {
  constructor() {}

  getNavMenu(): NavMenuDto {
    return new NavMenuDto('NavMenu', [
      new NavItemDto('Approval', 'dashboard', 'admin', '/approval'),
      new NavItemDto('Startups', 'dashboard', '', '/Stratup'),
      new NavItemDto('Sectors', 'dashboard', 'admin', '/sectors'),
    ]);
  }
}
