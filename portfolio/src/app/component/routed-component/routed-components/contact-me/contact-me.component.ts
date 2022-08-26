import { Component, OnInit } from '@angular/core';
// import {httpClient} from

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})

export class ContactMeComponent implements OnInit {

  email: any;


  constructor(
    ) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.httpClient.post('https://contact-form-295b4-default-rtdb.firebaseio.com/',[this.])
  }

}
