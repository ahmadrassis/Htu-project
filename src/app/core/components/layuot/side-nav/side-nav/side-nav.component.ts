import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { SidenaveService } from '../../../services/sidenave.service';
import { NavMenuDto } from 'src/app/core/dto/nav-menu';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  navMenu: NavMenuDto;
  userData: any;

  loading = true;
  constructor(
    private breakpoint: BreakpointObserver,
    private _sideNave: SidenaveService,
    private _authService: AuthService
  ) {
    this.navMenu = this._sideNave.getNavMenu();
    console.log(this._sideNave);
  }
  ngOnInit(): void {
    this._authService.userInfo.subscribe((user) => {
      if(user){
        this.userData = user;
        console.log(this.userData);
        this.loading = false ;
      }

    });
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


}
