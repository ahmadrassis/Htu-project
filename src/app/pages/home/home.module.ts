import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from 'src/app/core/components/layuot/header/header.module';
import { RouterModule } from '@angular/router';
import { PreviewstartupComponent } from './preview-startup/previewstartup.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StartupComponent } from './startup/startup.component';
import { MainComponent } from 'src/app/core/components/layuot/main/main.component';
import { FooterComponent } from 'src/app/core/components/layuot/footer/footer.component';

const MatImport = [MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    StartupComponent,
    PreviewstartupComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HomeRoutingModule,
    ...MatImport,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
