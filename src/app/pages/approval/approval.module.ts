import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalRoutingModule } from './approval-routing.module';
import { ApprovalComponent } from './approval/approval.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';


const MatImport=[
  MatInputModule,
  MatPaginatorModule,
  MatIconModule,
  MatMenuModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatSelectModule,
]

@NgModule({
  declarations: [
    ApprovalComponent
  ],
  imports: [
    CommonModule,
    ApprovalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...MatImport
  ]
})
export class ApprovalModule { }
