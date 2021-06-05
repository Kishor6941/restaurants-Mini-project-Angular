import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';
import { UpdateRestaurantsComponent } from './update-restaurants/update-restaurants.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {component:HomeComponent, path:''},
  {component:AddRestaurantsComponent, path:'add'},
  {component:UpdateRestaurantsComponent, path:'update/:id'},
  {component:ListRestaurantsComponent, path:'list'},
  {component:LoginComponent, path:'login'},
  {component:RegisterComponent, path:'register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
