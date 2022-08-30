import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { FormGroup } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  // templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})

export class ContactMeComponent implements OnInit {

  submitted=true;
  email: any;
  submitMessage:any;
  // contactForm!: FormGroup;
  contactForm: any;
  constructor(
    private formBuilder:FormBuilder,
    private httpClient: HttpClient,
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


    this.httpClient
    .post(
      'https://contactpage-f716f-default-rtdb.firebaseio.com/',
      this.contactForm.value
    )
    .subscribe(
      (response) => {
        console.log('response', response);
        this.contactForm.reset();
      }
    );
  }

  onSubmit(){
    // this.httpClient.post('https://contact-form-295b4-default-rtdb.firebaseio.com/',[this.])
  }

}
