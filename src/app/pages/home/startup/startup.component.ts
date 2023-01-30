import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StartupsService } from 'src/app/core/services/startups.service';
import { Observable } from 'rxjs';
import { Startup } from 'src/app/core/interface/startups.interface';

@Component({
  selector: 'app-startup-home',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css'],
})
export class StartupComponent implements OnInit {

  arrayStartup:any ;
item: any;
  constructor(
    private _startupServices: StartupsService,
    private router: Router,

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
  onPreviewClicked(item : Startup)  {
    this.router.navigate(['/home/preview-startup'],{
      queryParams: {
        key: item.key,
      },

  })

}
}
