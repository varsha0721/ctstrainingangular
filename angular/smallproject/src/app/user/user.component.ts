import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public personData = [];
  constructor(private ds: DataService ) { }

  ngOnInit(): void {
    this.ds.getData().subscribe( data => this.personData = data)  
  }

}
