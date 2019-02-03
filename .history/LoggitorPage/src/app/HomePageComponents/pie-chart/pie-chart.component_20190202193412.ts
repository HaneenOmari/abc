import { AppService } from './../../Services/App/app.service';
import { Component, OnInit } from '@angular/core';
import { Def } from './../../models/def';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // Pie
  public defs: Def[];

  public datasource ;
  public pieChartLabels: string[] = ['BLM Cust', 'CGN Core', 'BLM Core', 'CGN Cust'];
 public pieChartData: number[] = [300, 213, 78, 145];
  public pieChartType: String = 'pie';
  constructor(private defservice: AppService  ) {}
 /* ngOnInit() {
    this.appService.getChart().subscribe(results => {

        if (!results) {
        return;
      }

     // this.pieChartData[0] = (results1[0].defnum);
    // public pieChartData:number[] = [300];//, 500, 100];
     // this.pieChartType = 'pie';
  }); }
*/

// by Haneen
  ngOnInit() {    this.defservice.getdef().
    subscribe(defss => {
      this.defs = defss;

       this.pieChartLabels = [];
       this.pieChartData = [];

      for (let i = 0; i < this.defs.length; i++) {
        this.barChartLabels[i] = this.defs[i].name ;
        this.bieChartData[i] = this.defs[i].defnum ;



      }
    });

  }




  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
