import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service"
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-restaurants',
  templateUrl: './add-restaurants.component.html',
  styleUrls: ['./add-restaurants.component.scss']
})
export class AddRestaurantsComponent implements OnInit {

  submitted = false;

  addRestoaurants = new FormGroup({
    name : new FormControl(''),
    address : new FormControl(''),
    email : new FormControl(''),
    mobile : new FormControl('')
  })
  constructor(private commonService : CommonService, private router: Router,
    ) { }

  ngOnInit(): void {
     
  }
  createResto(){
    this.commonService.addResto(this.addRestoaurants.value).subscribe(res =>{
      this.submitted =true;
      this.addRestoaurants.reset();
      this.router.navigate([`/list`]);

      
    })
    
  }

  closeAlert() {
    this.submitted =false;

  }
}
