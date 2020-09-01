import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

URLValue:any;
TheTime:any;

  constructor(private config: AppConfigService) {
    //this.URLValue = this.config.getConfig();
  }

  ngOnInit() {
    this.URLValue = this.config.getConfig();

    let dateTime = new Date();
    this.TheTime = dateTime;
  }

}
