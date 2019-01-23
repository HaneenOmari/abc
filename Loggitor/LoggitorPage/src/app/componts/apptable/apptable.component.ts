import { AppService } from './../../Services/App/app.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MatSort, MatSortable , MatTableDataSource , MatPaginator } from '@angular/material';
@Component({
  selector: 'app-apptable',
  templateUrl: './apptable.component.html',
  styleUrls: ['./apptable.component.css']
})
export class ApptableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource ;
  displayedColumns = ['App', 'DefNum', 'Def'];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getApp().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results) ;
       this.dataSource.sort = this.sort;
    });
  }

}
