
import { Component} from '@angular/core';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent  {
  

  constructor(private _Router:Router){}


  backToHome(){
      this._Router.navigate(["/"]);
  }






}
