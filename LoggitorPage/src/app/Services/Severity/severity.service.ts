import { Severity } from '../../models/severity.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
 @Injectable({
  providedIn: 'root'
})
export class SeverityService {
  private SeverityserviceUrl = '../../../assets/mockData/SeverityDataDemo.json';
  constructor(private http1: HttpClient ) { }
  getSeverity(): Observable<Severity[]> {
    return this.http1.get<Severity[]>(this.SeverityserviceUrl);
  }
}
