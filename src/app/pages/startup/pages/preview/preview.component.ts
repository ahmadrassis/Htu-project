import { Startup } from './../../../../core/interface/startups.interface';
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartupsService } from 'src/app/core/services/startups.service';
import { Subscription } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit, OnDestroy {
  key: string = '';
  startup: Startup = {
    emailAddress: '',
    name: '',
    sectors: [],
    websiteUrl: '',
  };
  subscribe!: Subscription;
  loading = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _startupService: StartupsService
  ) {}
  ngOnDestroy(): void {
    if (this.subscribe) {
      this.subscribe.unsubscribe();
    }
    console.log('done unsubscribe');
  }

  ngOnInit(): void {
    this.subscribe = this.activatedRoute.queryParams.subscribe((result) => {
      console.log(result);
      if (result['key']) {
        this.key = result['key'];
        this.getById();
      }
    });
  }

  getById() {
    this.subscribe = this._startupService
      .getById(this.key)
      .subscribe((result: any) => {
        console.log(result.startup);
        if (result) {
          this.startup = result;
          this.loading = false;
        }
      });
  }
}
