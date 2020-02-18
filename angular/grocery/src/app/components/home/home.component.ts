import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories:any;
  public imgurl = "http://rjtmobile.com/grocery/images/";
  constructor(private ds : DataService) { }

  ngOnInit(): void {
    this.ds.getData().subscribe(x => this.categories = x.data)
  }

}
