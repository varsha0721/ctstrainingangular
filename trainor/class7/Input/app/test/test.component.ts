import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styles: [``]
})
export class TestComponent implements OnInit {
  constructor() {}

  @Input()
  public parentData;

  ngOnInit(): void {}
}
