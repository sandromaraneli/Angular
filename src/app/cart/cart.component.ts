import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { HttpService } from '../http.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

public cartProducts: any[] = [];

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    const storedCart = localStorage.getItem("favorites");
    this.cartProducts = storedCart ? JSON.parse(storedCart) : [];
  }

  removeFromCart(index: number) {
    this.cartProducts.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(this.cartProducts));
  }
}