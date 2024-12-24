import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

public id: string | null = null;
  public singleProduct: any;

  constructor(private route: ActivatedRoute, private service: HttpService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      this.id = param['id'];
      this.getProductDetails(this.id);
    });
  }

  getProductDetails(id: string | null) {
    if (id) {
      this.service.getDataById(id).subscribe(data => {
        this.singleProduct = data;
      });
    }
  }

  addToCart() {
    const cartProducts = JSON.parse(localStorage.getItem("favorites")!) || [];
    // Check if product is already in the cart
    const productExists = cartProducts.some((product: { _id: any; }) => product._id === this.singleProduct._id);
    if (!productExists) {
      cartProducts.push(this.singleProduct);
      localStorage.setItem("favorites", JSON.stringify(cartProducts));
    } else {
      alert("Product is already in the cart!");
    }
  }
}


