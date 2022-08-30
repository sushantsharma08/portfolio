import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})

export class ContactMeComponent implements OnInit {

  submitted=true;
  email: any;
  submitMessage:any;
  contactForm!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    // private httpClient:HttpClient
    ) { 
  }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      message:[null,Validators.required]
    })

  }

  submitData(value:any){
    // if (value.name===null) {
    //   this.submitMessage="name cannot be empty"
    //   setTimeout(() => {
    //     this.submitted=false;
    //   }, 5000);
    //   return
    // }
    // if (value.email===null) {
    //   this.submitMessage="emaill cannot be empty"
    //   setTimeout(() => {
    //     this.submitted=false;
    //   }, 5000);
    //   return
    // }
    // if (value.message===null) {
    //   this.submitMessage="message cannot be emty"
    //   setTimeout(() => {
    //     this.submitted=false;
    //   }, 5000);
    //   return
    // }
    console.log();
    this.submitted=true;
    this.submitMessage="Message Sent Successfully"
    setTimeout(() => {
      this.submitted=false;
    }, 5000);

  }

  onSubmit(){
    // this.httpClient.post('https://contact-form-295b4-default-rtdb.firebaseio.com/',[this.])
  }

}
