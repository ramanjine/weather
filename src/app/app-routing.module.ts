import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherdetailsComponent} from './details/weatherdetails/weatherdetails.component';
import { CitylistComponent} from './details/citylist/citylist.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

 { path: 'weatherDetails/:id',
  component: WeatherdetailsComponent},
  {path: 'home',
  component: CitylistComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
