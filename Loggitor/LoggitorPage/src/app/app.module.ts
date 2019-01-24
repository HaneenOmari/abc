import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http' ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' ;
import {MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import { AppComponent } from './app.component';

// Imports Of services
import { DefectService } from './Services/Defect/defect.service';
import { AppService } from './Services/App/app.service';
import { SeverityService } from './Services/Severity/severity.service';

// imports of the table components
import { ApptableComponent } from './componts/apptable/apptable.component';
import { SeverityTableComponent } from './componts/severity-table/severity-table.component';
import { DefectTableComponent } from './componts/defect-table/defect-table.component';

 @NgModule({
  declarations: [
    AppComponent,
    DefectTableComponent,
    ApptableComponent,
    SeverityTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [
    DefectService,
    AppService,
    SeverityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
