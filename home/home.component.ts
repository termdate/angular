import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input()
  title:string;
  items = [1,2,3,4,5];
  constructor(){}
  count = 0 ;
  countNumber(){
    this.count = this.count + 1;
  
  }
}


