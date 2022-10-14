import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   shownav=true;
  constructor() { }

  ngOnInit(): void {
  }
  navToggle(){
    if(this.shownav===true){
      this.shownav=false
    }else{
      this.shownav=true
    }console.log(this.shownav);
    
  }
}
