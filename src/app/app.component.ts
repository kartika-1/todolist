import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'ToList';

  public items=[];

  public newtask;




  public addToList(){
    if(this.newtask==''){}
    else{
      this.items.push(this.newtask);
      this.newtask="";
    }
  }

  public deletetask(index) { 
    this.items.splice(index, 1); 
} 



} 


