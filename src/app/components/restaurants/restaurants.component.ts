import { RestaurantsService } from './../../services/restuarants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  rest;

  constructor(
    private restaurantsService: RestaurantsService,
  ) { }

  ngOnInit() {
    this.rest = this.restaurantsService.getRestaurants();}
}
