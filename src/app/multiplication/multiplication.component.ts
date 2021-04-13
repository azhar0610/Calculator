import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  val1!: any;
  val2!: any;
  val3!: any;
  showError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  multiply(){
    if(this.val1== null || this.val2== null) {
      this.showError = true;
    } else {
      this.val3 = this.val1 * this.val2;
      this.showError = false;
    }
    }


}
