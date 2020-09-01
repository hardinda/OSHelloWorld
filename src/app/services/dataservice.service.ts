import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Request {
  server1: any;
}



@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }


  getConfiguration() {
    console.log("about to open json file..................");
    return this.http.get('/assets/config/config.json');
  }

  getConfiguration2() {
    return "[{'server1': 'some_endpoint'}]";
  }


}




