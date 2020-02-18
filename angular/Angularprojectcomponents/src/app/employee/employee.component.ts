import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 public emplv =[]
  constructor(private dS: DataService) { 
    // this.emplv = dS.getEmployees();
  }

  ngOnInit(): void {
    this.dS.getEmployees().subscribe(data => this.emplv=data)
  }

}
