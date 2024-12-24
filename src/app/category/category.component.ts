import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  public categoryProducts:any[] = []
  public id:any;

  constructor(public route:ActivatedRoute, public service: HttpService) {

    this.route.queryParams.subscribe((query:any) => this.id = query.id )

    this.service.getProductsByCategoryId(this.id).subscribe((data:any) =>{
      console.log(data);
      this.categoryProducts = data.products
    })

  }

}