import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantsComponent } from './add-restaurants/add-restaurants.component';
import { UpdateRestaurantsComponent } from './update-restaurants/update-restaurants.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http"
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantsComponent,
    UpdateRestaurantsComponent,
    ListRestaurantsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
