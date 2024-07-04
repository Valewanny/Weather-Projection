import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Service/weather.service';
import { ForecastData } from '../../Models/forecast-data.model';
import { MySharedService } from '../../shared/my-shared.service';
import { trigger, animate, style, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forecast-display',
  templateUrl: './forecast-display.component.html',
  styleUrls: ['./forecast-display.component.css'],
  animations: [
    trigger('slideInOut',[
      transition(':enter', [
        style({ transform: 'translateX(100%)'}),
        animate('800ms ease-in', style({ transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: ' translateX(-100%)'}))
      ])
    ])
  ]
})
export class ForecastDisplayComponent implements OnInit {
  forecastData: any[] = [];
  weatherData: any;
  cityName: string = '';
 

  constructor(private weatherService: WeatherService, private shared: MySharedService, private router: Router) {}

  ngOnInit(): void {
    this.shared.currentLocation.subscribe(location => {
      this.cityName = location
      this.getWeatherForecast(location);   
     })
  }

  getWeatherForecast(city: string): void {
    this.weatherService.getWeatherForecastByCityName(city).subscribe(
      (data: any[]) => {
        this.forecastData = this.mapForecastData(data);
        console.log('Weather forecast:', this.forecastData);
      },
      (error) => {
        console.error('Error fetching current weather:', error);
      }
    );
  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' }; // Use 'short' for abbreviated day names
    return new Intl.DateTimeFormat('en-US', options).format(date);
  } 
  private mapForecastData(data: any[]): ForecastData[] {
    // Assuming data is already sorted by date/time
    const forecastMap = new Map<string, ForecastData>();
    data.forEach(forecast => {
      const dateTxt = forecast.dt_txt.split(' ')[0]; // Extract date part only
      if (!forecastMap.has(dateTxt)) {
        forecastMap.set(dateTxt, {
          date: new Date(dateTxt),
          highTemp: forecast.main.temp_max,
          lowTemp: forecast.main.temp_min,
          weatherDescription: forecast.weather[0].description,
          weatherIcon: forecast.weather[0].icon,
          precipitation: forecast.pop,
        });
      }
    });
    // Convert map values to array and return
    return Array.from(forecastMap.values());
  }
}
