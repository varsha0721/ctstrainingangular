import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public currentDate = new Date;
  name = "xys fdfg";
  constructor() { }

  ngOnInit(): void {
  }

}
