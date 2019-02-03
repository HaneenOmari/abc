import { AppService } from './../../Services/App/app.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  // Pie
  public datasource ;
  public pieChartLabels: string[] = ['BLM Cust', 'CGN Core', 'BLM Core', 'CGN Cust'];
 public pieChartData: number[] = [300, 213, 78, 145];
  public pieChartType: String = 'pie';
  constructor(private appService: AppService  ) {}
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
     // this.barChartLabels = [];
      this.defs = defss;
      this.C  = [];
      this.E = [];
    this.W = [];
       this.barChartData = [
        {data: this.C , label: 'critical'},
        {data: this.E, label: 'error'},
        {data: this.W, label: 'warning'}
      ];

      for (let i = 0; i < this.defs.length; i++) {

        this.C[i] = this.defs[i].critical ;
        this.E[i] = this.defs[i].error ;
        this.W[i] = this.defs[i].warning ;

        this.barChartLabels[i] = this.defs[i].name ;



      }

        this.barChartData = [
          {data: this.C, label: 'critical'},
          {data: this.E, label: 'error'},
          {data: this.W, label: 'warning'}
        ];



         console.log(this.W);





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
