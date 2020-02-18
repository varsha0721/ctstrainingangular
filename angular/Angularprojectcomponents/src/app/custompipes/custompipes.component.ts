import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipes',
  templateUrl: './custompipes.component.html',
  styleUrls: ['./custompipes.component.css']
})
export class CustompipesComponent implements OnInit {

   
public employees = [
  {"empId": 101, "empName" : "James", "gender" : 
  "Male","salary" : 25000, "email" : "ja@gmail.com","dob": 6/15/15},
  {"empId": 102, "empName" : "Lala", "gender" : 
  "Male","salary" : 25095, "email" : "gigi@gmail.com","dob": 6/15/97},

  {"empId": 103, "empName" : "Lala3", "gender" : 
  "Male","salary" : 25095, "email" : "gigi@gmail.com","dob": 6/15/97}
]
  constructor() { }

  ngOnInit(): void {
  }

}
