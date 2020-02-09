import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Solution1Component } from './component/solution1/solution1.component';
import { Solution2Component } from './component/solution2/solution2.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatafalseComponent } from './component/datafalse/datafalse.component';


const routes: Routes = [
  {
    path: 'component1',
    component: Solution1Component
  },
  {
    path: 'component2',
    component: Solution2Component
  },
  {
    path: 'datafalse',
    component: DatafalseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  BrowserModule, HttpClientModule , RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
