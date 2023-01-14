import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartupsService } from 'src/app/core/services/startups.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css'],
})
export class StartupComponent implements OnInit {
  arrayStartup: any;
item: any;
  constructor(
    private _startupServices: StartupsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this._startupServices.getAll().subscribe((result) => {
      if (result) {
        this.arrayStartup = result;
        console.log(result);
      }
    });
  }
  onPreviewClicked() {
    this.router.navigate(['/home/startup-preview']);
  }
}
