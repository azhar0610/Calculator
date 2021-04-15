import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moduloDivision',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class DivisionComponent implements OnInit {

  val1!: any;
  val2!: any;
  val3!: any;
  invaliInput: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  moduloDivision(){
    if(this.val1 == null || this.val2 == null){
      this.invaliInput = true;
    }else {
      this.val3 = this.val1 % this.val2;
    }
  }

}
