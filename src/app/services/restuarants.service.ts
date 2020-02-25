import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  constructor(
    private http: HttpClient
  ) { }

  getRestaurants() {
      return this.http.get('http://3.86.25.222:8080/RestaurantManager-0.0.1/restaurant/list');
    }
}
