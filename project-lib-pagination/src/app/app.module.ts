import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { RsPaginationLibModule } from 'projects/rs-pagination-lib/src/public-api';
import { RsChartsC3LibModule } from 'projects/rs-charts-c3-lib/src/public_api';

export const ROUTES : Routes = [

  {
    path: '',  
    component: AppComponent,
    data: {},
  },
  { path: '**',
    component: AppComponent 
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      ROUTES,
      {useHash: true}
     // { enableTracing: true },
    ),
    HttpClientModule,
    RsPaginationLibModule,
    RsChartsC3LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
