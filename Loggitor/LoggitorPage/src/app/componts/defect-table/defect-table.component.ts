import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable , MatTableDataSource , MatPaginator } from '@angular/material';
import {DefectService } from '../../Services/defect.service' ;
@Component({
  selector: 'app-defect-table',
  templateUrl: './defect-table.component.html',
  styleUrls: ['./defect-table.component.css']
})
export class DefectTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource ;
  displayedColumns = ['SeqId', 'App', 'Code', 'Severity'];
  constructor(private defectService: DefectService  ) {}

  ngOnInit() {
    this.defectService.getDefect().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results) ;
       this.dataSource.sort = this.sort;
    });
  }

}
