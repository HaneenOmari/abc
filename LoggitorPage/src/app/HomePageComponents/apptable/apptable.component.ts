import { AppModel } from './../../models/apps.model';
import { AppService } from './../../Services/App/App.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-apptable',
  templateUrl: './apptable.component.html',
  styleUrls: ['./apptable.component.css']
})
export class ApptableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColums = ['name', 'defnum' , 'percentage'];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getAppModel().subscribe(results => {
      if (!results) {
        return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    });
  }

}
