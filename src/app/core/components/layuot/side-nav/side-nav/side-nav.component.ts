import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { SidenaveService } from '../../../services/sidenave.service';
import { NavMenuDto } from 'src/app/core/dto/nav-menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  navMenu: NavMenuDto;
  constructor(
    private breakpoint: BreakpointObserver,
    private _sideNave: SidenaveService
  ) {
    this.navMenu = this._sideNave.getNavMenu();
  }

  ngAfterViewInit(): void {
    this.breakpoint
      .observe(['(max-width:750px)'])
      .pipe(delay(1))
      .subscribe((value: BreakpointState) => {
        if (value.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  ngOnInIt(): void {

  }
}
