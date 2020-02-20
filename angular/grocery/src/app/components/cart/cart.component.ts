import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public url = 'http://rjtmobile.com/grocery/images/';
  public cart : any = [];
  public count: any ;
  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.cart);
  }

  // totalPrice()
  // {
  //   this.count = this.cart.mrp.;
  // }

}
