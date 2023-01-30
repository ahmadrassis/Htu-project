import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { StartupComponent } from './startup/startup.component';

import { HomeRoutingModule } from './home-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PreviewstartupComponent } from './preview-startup/previewstartup.component';
import { HeaderModule } from 'src/app/core/components/layuot/header/header.module';

const MatImport=[
  MatCardModule,
  MatButtonModule,
  MatIconModule,
]

@NgModule({
  declarations: [
    HomeComponent,
    StartupComponent,
    PreviewstartupComponent,
    MainComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
     HeaderModule,
    HomeRoutingModule,
    RouterModule,
    ...MatImport
  ]
})
export class HomeModule { }
