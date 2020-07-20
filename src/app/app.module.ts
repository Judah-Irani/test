import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Global } from './global';
import { ConfigComponent } from './config/config.component';
import { CommonComponent } from './common/common.component';
import {AppGuard} from './app.guard';
import {MainModule} from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    CommonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainModule,
  ],
  providers: [
    Global,
    ConfigComponent,
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
