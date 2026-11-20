import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [NgClass,FormsModule],
  selector: 'app-dynamic-css',
  styleUrl: './dynamic-css.css',
  templateUrl: './dynamic-css.html',
})
export class DynamicCss {

  divClassName="";
  IsCheckBoxIsCheckedOrNot:boolean=false;

  changecolor(colorname:string)
  {
    this.divClassName=colorname;
  }
}
