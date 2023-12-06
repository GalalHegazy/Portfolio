import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  constructor( private _Router:Router){}

  backToHome(){
    this._Router.navigate(["/"]);
}


}
