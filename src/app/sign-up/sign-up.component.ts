import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {

  model: any = {};

  onSubmit() {
    console.log(JSON.stringify(this.model));
    
  }

  

}
