import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { MatSidenavModule } from '@angular/material/sidenav';
import { environment } from 'src/environments/environments';
import { SideNavModule } from './core/components/layuot/side-nav/side-nav.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    SideNavModule,
    // MatSidenavModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
