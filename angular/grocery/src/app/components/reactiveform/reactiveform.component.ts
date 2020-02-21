import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators, FormControl, FormControlName } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  

  public userForm = new FormGroup ({
    fname: new FormControl('mark'),
    lname: new FormControl('smith'),

    address : new FormGroup
    ({
      house: new FormControl(),
      city :  new FormControl(),
      state: new FormControl()
    })
    
  })

  constructor(){ }
  ngOnInit(): void {
  }

  // constructor(private fb: FormBuilder) { }
  
  // ngOnInit(): void {
  //    this.createForm()
  // }

  // createForm()
  // {
  //   this.userForm = this.fb.group({
  //     'email': [null, Validators.required],
  //     'password':[null, Validators.required]
  //   })
  // }

  // onSubmit(data){
  //   console.log(data);
  // }
}
