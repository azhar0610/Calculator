import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subraction',
  templateUrl: './subraction.component.html',
  styleUrls: ['./subraction.component.css']
})
export class SubractionComponent implements OnInit {
  val1!: any;
  val2!: any;
  val3!: any;

  constructor() { }

  ngOnInit(): void {
  }

  subract(){
    this.val3 = this.val1 - this.val2;
    }


}
