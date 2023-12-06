import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  
  constructor(private _Router:Router){}

  backToHome(){
    this._Router.navigate(["/"]);
}

}
