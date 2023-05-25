import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';

  displayname="";
  displaycontact="";
  displayaddress="";
  displayemail="";

  getValue(name:string ,contact:string,address:string,email:string){
        this.displayname=name;
        this.displaycontact=contact;
        this.displayaddress=address;
        this.displayemail=email;
  }
}
