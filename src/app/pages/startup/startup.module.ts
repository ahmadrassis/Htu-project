import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupRoutingModule } from './startup-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StartupComponent } from './startup/startup.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AddStartupComponent } from './pages/add-startup/add-startup.component';
import { UpdateStartupComponent } from './pages/update-startup/update-startup.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewComponent } from './pages/preview/preview.component';
import { RequistComponent } from './pages/request/requist.component';
import {MatCardModule} from '@angular/material/card';

const MatImports = [
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatFormFieldModule ,
  MatProgressSpinnerModule ,
  ReactiveFormsModule ,
  MatSelectModule,
  FormsModule,
  MatCardModule,

];
@NgModule({
  declarations: [StartupComponent, AddStartupComponent, UpdateStartupComponent, PreviewComponent, RequistComponent],
  imports: [CommonModule, StartupRoutingModule, ...MatImports],
})
export class StartupModule {}
