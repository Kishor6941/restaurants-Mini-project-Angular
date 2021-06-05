import { Component, OnInit } from '@angular/core';
import {CommonService} from "../common.service"
import {Subscription} from "rxjs"
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.scss']
})
export class ListRestaurantsComponent implements OnInit {
  restoId  : any;
  restoCollectionData : any;
  constructor(private commonservice :CommonService, private actRoute: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.restoId = this.actRoute.snapshot.params.id;
    this.getRestoList();
  }

  getRestoList(){
    this.commonservice.getRestoList().subscribe(res=>{
       this.restoCollectionData = res;
    })
  }
  deleteResto(item: any){
     this.commonservice.deleteRestoData(item.id).subscribe(res=>{
      let index = this.restoCollectionData.indexOf(item);
      this.restoCollectionData.splice(index, 1);

    })
    
  }

}
