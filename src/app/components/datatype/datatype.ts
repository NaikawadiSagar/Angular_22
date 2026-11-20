import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-datatype',
  styleUrl: './datatype.css',
  templateUrl: './datatype.html',
})
export class Datatype {

   coursename : string = "Angular";
   rollno:Number = 123;
  IsSuccess:boolean=true;

  products={
    name:"Mobile",
  }

  ngarrays:string []=[];
}
