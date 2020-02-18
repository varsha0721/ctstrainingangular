import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public emplistlv =[]
  constructor(private dS: DataService) {
    // this.emplistlv = dS.getEmployees();
   }

  ngOnInit(): void {
  }

}
