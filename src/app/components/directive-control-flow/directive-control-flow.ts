import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgIf, FormsModule,NgFor],
  selector: 'app-directive-control-flow',
  styleUrl: './directive-control-flow.css',
  templateUrl: './directive-control-flow.html',
})
export class DirectiveControlFlow {

  IsDivVisibility: string = "IsVisible";
  num1: number = 0;
  num2: number = 0;
  Charcters:string="";
  isPresent:boolean=false;
  ShowDiv() {
    this.IsDivVisibility = "IsVisible";
  }

  HideDiv() {
    this.IsDivVisibility = "Hidden";
  }

  CheckCharcterIsExists()
  {
    
    const IsExists=this.Charcters.includes('e');
    if(IsExists)
    {
      this.isPresent=true;
    }
    else
    {
      this.isPresent=false;
    }
  }

  FrootsArray:string []=['Mango','Banana','Garps','Orange'];

  empObj=[

    {Name:"Sagar",City:"Mumbai",Mobile_no:"4543345"},
    {Name:"Samir",City:"Pune",Mobile_no:"1235221"},
    {Name:"Sunit",City:"Mumbai",Mobile_no:"4433221"},
    {Name:"Payal",City:"Goa",Mobile_no:"123221"}
  ]
}
