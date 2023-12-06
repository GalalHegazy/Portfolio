import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  
  constructor(private _Router:Router){}

  backToHome(){
    this._Router.navigate(["/"]);
}

}
