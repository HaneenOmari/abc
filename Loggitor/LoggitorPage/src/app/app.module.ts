import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import {MatTableModule, MatSortModule } from '@angular/material';
import { DefectTableComponent } from './componts/defect-table/defect-table.component';
import { DefectService } from './Services/defect.service';
import { FormsModule } from '@angular/forms';
 @NgModule({
  declarations: [
    AppComponent,
    DefectTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    FormsModule
  ],
  providers: [DefectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
