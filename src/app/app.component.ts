import { Component } from '@angular/core';

class Item{
  height: number;
  age: number;
  weight: number;

  constructor(height:number, age:number, weight:number)
  {
    this.height=height;
    this.age=age;
    this.weight=weight;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perfect-weight-app';
  isC1 = true;
  showTable={
        class1: this.isC1,
    }

    show(): void {
      this.showTable["class1"] = !this.showTable["class1"];
  }
  
  items: Item[]=
  [
    { height: 176, age: 34, weight: 56 }
  ];

  public result: number;
  calc(height:number, age:number, weight:number):void{
    if(height==null || age==null || weight==null)
    return;
    else
    {
       if(age<40)
       {
         this.result=height-110;
       }
      else{this.result=height-100;}
          console.log(this.result);
          if((this.result-weight)<=5&&(weight-this.result)<=5)
          {
            window.alert("Your weight is perfect!");
          }
        else window.alert("Your weight is not perfect!");
          this.items.push(new Item(height, age, weight))
      }
}
}

