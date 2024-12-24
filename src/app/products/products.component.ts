import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpService } from '../http.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public productList: any[] = [];
  public cartProducts: any[] = [];

  constructor(public service: HttpService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.service.getAllProduct().subscribe((data: any) => {
      this.productList = data.products;
    });

    if (isPlatformBrowser(this.platformId)) {
      const favorites = localStorage.getItem("favorites");
      this.cartProducts = favorites ? JSON.parse(favorites) : [];
    }
  }

  addToCart(product: any) {
    const cartProducts = JSON.parse(localStorage.getItem("favorites")!) || [];
    // Check if product is already in the cart
    const productExists = cartProducts.some((item: { _id: any; }) => item._id === product._id);
    if (!productExists) {
      cartProducts.push(product);
      localStorage.setItem("favorites", JSON.stringify(cartProducts));
      alert(`${product.title} has been added to the cart!`);
    } else {
      alert("Product is already in the cart!");
    }
  }
}