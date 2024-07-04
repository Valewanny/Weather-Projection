import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './Components/current-weather/current-weather.component';
import { ForecastDisplayComponent } from './Components/forecast-display/forecast-display.component';
import { LocationInputComponent } from './Components/location-input/location-input.component';
import { SearchComponent } from './Components/search/search.component';
import { WeatherService } from './Service/weather.service';
import { GeocodingService } from './Service/geocoding.service';
import { MySharedService } from './shared/my-shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastDisplayComponent,
    LocationInputComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    WeatherService,
    GeocodingService,
    MySharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
