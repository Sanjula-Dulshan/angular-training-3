import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicBaseComponent } from './public-base/public-base.component';
import { PrivateBaseComponent } from './private-base/private-base.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicBaseComponent,
    PrivateBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
