import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Solution1Component } from './component/solution1/solution1.component';
import { Solution2Component } from './component/solution2/solution2.component';

@NgModule({
  declarations: [
    AppComponent,
    Solution1Component,
    Solution2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
