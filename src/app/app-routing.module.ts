import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './Components/current-weather/current-weather.component';
import { ForecastDisplayComponent } from './Components/forecast-display/forecast-display.component';
import { SearchComponent } from './Components/search/search.component';
import { LocationInputComponent } from './Components/location-input/location-input.component';

const routes: Routes = [
  { path: '', redirectTo: '/current-weather', pathMatch: 'full' },
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'forecast', component: ForecastDisplayComponent },
  { path: 'search', component: SearchComponent },
  { path: 'location', component: LocationInputComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
