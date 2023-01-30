import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Startup } from 'src/app/core/interface/startups.interface';
import { AuthService } from 'src/app/core/services/auth.service';
import { StartupsService } from 'src/app/core/services/startups.service';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css'],
})
export class StartupComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Startup>([]);
  displayedColumns = ['name', 'emailAddress', 'sectors', 'city'];
  userData: any;
  loading = true;
  subscribe!: Subscription;
  constructor(
    private _startupServices: StartupsService,
    private router: Router,
    private _authService: AuthService
  ) {}

  //unsubscribe ngOnDestroy
  ngOnDestroy(): void {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
    console.log('done unsubscribe');
  }

  ngOnInit(): void {
    this.getuserInf();

  }

  getuserInf() {
    this.subscribe = this._authService.userInfo.subscribe((user) => {
      this.userData = user;
      console.log(this.userData);
      if (this.userData.role) {
        if (this.userData.role === 'admin') {
          this.displayedColumns.push('action');
        }
        this.getAllData();
      }
    });
  }

  getAllData() {
    this.subscribe = this._startupServices.getAll().subscribe((result: any) => {
      if (result) {
        this.dataSource = new MatTableDataSource(result);
        console.log(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource._updateChangeSubscription();
        this.loading = false;
      }
    });
  }

  applyFilter($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onEditCliked(row: Startup) {
    this.router.navigate(['/startup/update-startup'], {
      queryParams: {
        key: row.key,
      },
    });
  }

  onDeleteCliked(row: Startup) {
    this._startupServices.delete(row.key).then(() => {
      window.alert('Deleted sucessfull');
    });
  }

  onAddCliked() {
    this.router.navigate(['/startup/add-startup']);
  }

  onRowCliked(row: Startup) {
    this.router.navigate(['/startup/preview-startup'], {
      queryParams: {
        key: row.key,
      },
    });
  }

  onRequestNewStartup() {
    this.router.navigate(['/startup/request-startup']);
  }
}
