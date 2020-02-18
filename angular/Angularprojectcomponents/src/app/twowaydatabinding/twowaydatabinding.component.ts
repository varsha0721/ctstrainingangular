import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaydatabinding',
  templateUrl: './twowaydatabinding.component.html',
  styleUrls: ['./twowaydatabinding.component.css']
})
export class TwowaydatabindingComponent implements OnInit {

  name = "mark";
  onButtonClick(value){
  console.log(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
