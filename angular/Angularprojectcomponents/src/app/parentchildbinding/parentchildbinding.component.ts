import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parentchildbinding',
  templateUrl: './parentchildbinding.component.html',
  styleUrls: ['./parentchildbinding.component.css']
})
export class ParentchildbindingComponent implements OnInit {

  // @Input()
  // fname;

  // @Input()
  // lname;

  // @Input()
  // details;

  @Output()
  public childEvent = new EventEmitter();
  
  onButtonClick()
  {
    this.childEvent.emit("data from child");
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
