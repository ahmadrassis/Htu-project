import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewstartupComponent } from './preview-startup/previewstartup.component';
import { StartupComponent } from './startup/startup.component';

const routes: Routes = [
  {path:'',
  redirectTo:'startup',
  pathMatch:'full'
  },
  {
    path:'startup',
    component:StartupComponent
  },
{
  path:'preview-startup',
  component:PreviewstartupComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
