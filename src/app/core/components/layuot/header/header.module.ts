import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

const MatImorts = [MatToolbarModule, MatIconModule];

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule,RouterModule, ...MatImorts],
  exports: [HeaderComponent],
})
export class HeaderModule {}
