import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config: any;
  constructor(private http: HttpClient) { }
  public loadConfig() {

    let dateTime = Date.now();
    //this.TheTime = dateTime;

    return this.http.get('/assets/config/config.json?value=' + dateTime)
      .toPromise()
      .then((config: any) => {
        this.config = config;
        console.log(this.config);
      })
      .catch((err: any) => {
        console.error(err);
      });
  }
  getConfig() {
    return this.config;
  }

  clearConfig(){
    this.config=null;
  }

}
