import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupComponent } from '../home/startup/startup.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-startup', pathMatch: 'full' },
  {
    path: 'all-startup',
    component: StartupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartupRoutingModule {}
