import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  public productId: any; 
  public catId: any;
  public subCategory: any;
  public products: any;
  public _image_url =  'http://rjtmobile.com/grocery/images/';

  // activateroute = use to get value from parameter
  constructor(private dataService: DataService, private rs: ActivatedRoute) {
   this.catId = this.rs.snapshot.paramMap.get("id");
   this.productId = this.rs.snapshot.paramMap.get("catId");
   }

  ngOnInit(): void {
    this.dataService.getSubCategory(this.catId).subscribe(
      x => this.subCategory = x.data
    )

    this.dataService.getProducts(this.productId).subscribe(
      x => this.products = x.data
    )
  }

  addToCart(product)
  {
    if(localStorage.cart == undefined)
    {
      console.log(product)
      var cartItems = [];
      cartItems.push(product);
      localStorage.cart = JSON.stringify(cartItems); // stringify converts object to string
    }
    else
    {
      var products = JSON.parse(localStorage.cart) // parse converts string to object
      products.push(product)
      localStorage.cart = JSON.stringify(products)
    }
  }
  
  onSelectSubcategory(subId)
  {
    console.log(subId)
    this.dataService.getProducts(subId).subscribe(
    x => this.products = x.data)
  }

}
