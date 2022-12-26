import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderModule } from 'src/app/core/components/layuot/header/header.module';
import { RouterModule } from '@angular/router';
import { StartupComponent } from './startup/startup.component';
import { PreviewstartupComponent } from './preview-startup/previewstartup.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, StartupComponent, PreviewstartupComponent],

  imports: [
    CommonModule,
    HeaderModule,
    HomeRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
    ]),
  ],
})
export class HomeModule {}
