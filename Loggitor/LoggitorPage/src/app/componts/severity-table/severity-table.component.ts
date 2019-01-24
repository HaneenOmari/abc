import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable , MatTableDataSource , MatPaginator } from '@angular/material';
import { SeverityService } from './../../Services/Severity/severity.service';

 @Component({
  selector: 'app-severity-table',
  templateUrl: './severity-table.component.html',
  styleUrls: ['./severity-table.component.css']
})
export class SeverityTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  severitydataSource ;
  displayedColumns = ['Severity', 'DefNum', 'Def'];
  constructor(private severityService: SeverityService) { }

  ngOnInit() {
  this.severityService.getSeverity().subscribe(results => {
    if (!results) {
      return;
    }
    this.severitydataSource = new MatTableDataSource(results) ;
   // console.log(this.severitydataSource);
   //  this.severitydataSource.sort = this.sort;
  });
  }

}
