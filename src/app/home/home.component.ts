import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

URLValue:any;

  constructor(private config: AppConfigService) {
    this.URLValue = this.config.getConfig();
  }

  ngOnInit() {
    this.config.reloadConfig();
    this.URLValue = this.config.getConfig();
  }

}
