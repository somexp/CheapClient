import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';

const routes: Routes = [
  { path: '', component: RestaurantsComponent },
  //{ path: 'restaurant/:albumId', component: RestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
