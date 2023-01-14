import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupComponent } from '../startup/startup/startup.component';
import { PreviewstartupComponent } from './preview-startup/previewstartup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'startup',
    pathMatch: 'full',
  },
  {
    path: 'startup',
    component: StartupComponent,
  },
  {
    path: 'startup-preview',
    component: PreviewstartupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
