import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalConfig } from '../common/global-config';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) { }

  async getList(){
    const url = `${GlobalConfig.apiURL}search/shows?q=avengers`;
    let data = await this.http.get(url).toPromise();
    return data;
  }
  async getMovieData(id:any){
    const url = `${GlobalConfig.apiURL}shows/${id}`;
    let data = await this.http.get(url).toPromise();
    return data;
  }
}
