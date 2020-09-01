import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';
import { DataserviceService } from '../services/dataservice.service';


export interface Environment {
  server: any;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})




export class HomeComponent implements OnInit {

endpoint:any;
env: Environment[]; 

  constructor(private config: AppConfigService,private data: DataserviceService) {
    
  }

  ngOnInit() {
    
    //this.URLValue = this.data.getConfiguration
    //this.comm.currentRequest.subscribe(request => this.request = request);
    
    ///console.log(this.URLValue.server1);

    //this.URLValue = this.data.getConfiguration2();
    //console.log(this.URLValue);

    this.data.getConfiguration().subscribe((res : Environment[])=>{
      this.env = res;
      console.log(res);
      console.log(this.env[0].server);
      this.endpoint = this.env[0].server;
    });
   
  }

}
