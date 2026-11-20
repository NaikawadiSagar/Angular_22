import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-databinding',
  styleUrl: './databinding.css',
  templateUrl: './databinding.html',
})
export class Databinding {

  userName: string = "Sagar";
  age = 23;
  city = "Navi Mumbai";
  designation = ".NET Developer";
  company = "Astral Management";

  productName = "Laptop";
  price = 55000;
  brand = "ASUS";
  isAvailable = true;

  imageUrl: string = 'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';
  defaultName: string = "Sagar Naikawadi";
  isDisabled: boolean = false;
  cssClass: string = "text-primary";

  studentName = "Rahul";
  rollNo = 101;
  maths = 85;
  science = 90;
  english = 80;

  Total:number=this.maths+this.science+this.english;

  Showmessage()
  {
    
    alert("Wellcome to angular")
  }
}
