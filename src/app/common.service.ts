import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CommonService {
URL="http://localhost:3000/resto"
  constructor(private httpClient :HttpClient) { }

  getRestoList(){
   return this.httpClient.get(this.URL)
  }

  addResto(data: any) {
    return this.httpClient.post(this.URL, data);
  }

  deleteRestoData(id: any){
    return this.httpClient.delete(`${this.URL}/${id}`);

  }

  updateRestoData(id: any,data: any){
    return this.httpClient.put(`${this.URL}/${id}`,data);

  }

  getCurrentData(id: any){
    return this.httpClient.get(`${this.URL}/${id}`);

  }

}
