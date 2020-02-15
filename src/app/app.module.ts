import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Solution1Component } from './component/solution1/solution1.component';
import { Solution2Component } from './component/solution2/solution2.component';
import { DatafalseComponent } from './component/datafalse/datafalse.component';

@NgModule({
  declarations: [
    AppComponent,
    Solution1Component,
    Solution2Component,
    DatafalseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingBarRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
