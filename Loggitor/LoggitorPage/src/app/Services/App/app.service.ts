import { App } from '../../models/App.model';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private serviceUrl = '../../assets/mockData/AppDataDemo.json';
  constructor(private http: HttpClient) { }
  getApp(): Observable<App[]> {
    return this.http.get<App[]>(this.serviceUrl);
  }
}
