

// import { AppModule } from './AppComponent';
import { AppModule } from '../app.module';

import { of } from 'rxjs';
import { Def } from '../def';
import { DataserviceService } from '../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class  BarChartComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
   public barChartLabels: String[] = [];
    public s: string ;
    public defs: Def[];
    public C: any[];    public E: any[];
    public W: any[];

  public barChartType: String = 'bar';
  public barChartLegend: Boolean = true;


public barChartData: any[] = [
  {data: [], label: 'critical'},
  {data: [], label: 'error'},
  {data: [], label: 'warning'}
];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }




  constructor(private defservice: DataserviceService) {



   }


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

}



























import { Component, OnInit } from '@angular/core';
// import { AppService } from './../../Services/App/app.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent {
 // constructor(private app1Service: AppService  ) {}
 public datasource ;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: String = 'bar';
  public barChartLegend: Boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
