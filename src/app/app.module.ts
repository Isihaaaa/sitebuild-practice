import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { BEMComponent } from './bem/bem.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    FlexboxComponent,
    BEMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
