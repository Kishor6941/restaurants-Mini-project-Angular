import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service"
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-restaurants',
  templateUrl: './update-restaurants.component.html',
  styleUrls: ['./update-restaurants.component.scss']
})
export class UpdateRestaurantsComponent implements OnInit {
  submitted = false;
  restoId  : any;
  public response :any;
  editRestoaurants = new FormGroup({
    name : new FormControl(''),
    address : new FormControl(''),
    email : new FormControl(''),
    mobile : new FormControl('')
  })
  constructor(private commonService : CommonService,  private actRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.restoId = this.actRoute.snapshot.params.id;
this.getCurrentIdData();
     
  }
  updateResto(){
    this.commonService.updateRestoData(this.restoId,this.editRestoaurants.value).subscribe(res =>{      
      this.submitted =true;
       
    })
    
  }

  getCurrentIdData() {
    this.commonService.getCurrentData(this.restoId).subscribe(res=>{
      this.response = res;
      this.editRestoaurants = new FormGroup({
        name : new FormControl(this.response['name']),
        address : new FormControl(this.response['address']),
        email : new FormControl(this.response['email']),
        mobile : new FormControl(this.response['mobile'])
      })
      
    })
  }

  closeAlert() {
    this.submitted =false;

  }
}
