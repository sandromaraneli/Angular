import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  { path: "category", component: CategoryComponent },
  {path:"products",component:ProductsComponent},
  {path:"products/details", component:DetailsComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"login",component:LoginComponent},
  {path:"cart",component:CartComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
