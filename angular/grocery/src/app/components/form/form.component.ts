import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  intrests : any = [ "india", "japan" , "USA", "Uk" ];

  public userModel = new User('ffsdfsd', 'tgdsjg@.com', 1234567890 ,'', 'option1', true)
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data){
    console.log(data);
  }
}
