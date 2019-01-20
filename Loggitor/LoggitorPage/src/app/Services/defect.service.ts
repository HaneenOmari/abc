import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Defect } from '../models/defect.model';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class DefectService {
private serviceUrl = '../../assets/mockData/datademo1.JSON';
  constructor(private http: HttpClient ) { }
  getDefect(): Observable<Defect[]> {
    return this.http.get<Defect[]>(this.serviceUrl);
  }
}
