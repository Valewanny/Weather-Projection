import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Service/weather.service';
import { MySharedService } from '../../shared/my-shared.service';
import { WeatherData } from '../../Models/weather-data.model';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
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
export class CurrentWeatherComponent implements OnInit {
  weatherData!: WeatherData;
  cityName: string = '';
  backgroundImageUrl: string = '';
 

  constructor(private weatherService: WeatherService, private shared: MySharedService, private router: Router) {}

  ngOnInit(): void {
    this.shared.currentLocation.subscribe(location => {
      this.cityName = location
      this.getWeatherByCity(location);   
     })
  }

  getWeatherByCity(city: string): void {
    this.weatherService.getCurrentWeatherByCityName(city).subscribe(
      (data: any) => {
        this.weatherData = {
          main: {
            temp: data.main.temp,
            humidity: data.main.humidity
          },
          weather: [{
            description: data.weather[0].description,
            icon: undefined
          }],
          wind: {
            speed: data.wind.speed
          },
          sys: {
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset
          }
        };
        console.log('Current weather:', this.weatherData);
        // this.setBackgroundImage(this.weatherData.weather[0].description); // Update background based on weather condition
      },
      (error) => {
        console.error('Error fetching current weather:', error);
      }
    );
  }

  // setBackgroundImage(weatherDescription: string): void {
  //   // Example logic, replace with your actual conditions and image URLs
  //   if (weatherDescription.includes('clear')) {
  //     this.backgroundImageUrl = 'url(\'https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?cs=srgb&dl=pexels-wdnet-96622.jpg&fm=jpg\')';
  //   } else if (weatherDescription.includes('cloud')) {
  //     this.backgroundImageUrl = 'url(\'https://img.freepik.com/free-photo/cloudy-rainy-blue-dark-sky_657883-673.jpg\')';
  //   } else if (weatherDescription.includes('overcast clouds')) {
  //     this.backgroundImageUrl = 'url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1KhE3za6O0Z0DbFehkj3d-gXpKuSkqk2QA&s\')';
  //   } 
  //   else if (weatherDescription.includes('rain')) {
  //     this.backgroundImageUrl = 'url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDYtv1SaDPVdT1SnuMAEJzBpnmPyyIoZ7SeYkbE-jVFbGyP-O4YDsxRrrng&s\')';
  //   }
  //   else if (weatherDescription.includes('sunny')) {
  //     this.backgroundImageUrl = 'url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiffNDAHLTIs70jCwieBlcXgBAaYQZKO4ZNOGZ0bRwWepU3tZvvD_e6Rwppg&s\')';
  //   }
  //   else if (weatherDescription.includes('partly cloudy')) {
  //     this.backgroundImageUrl = 'url(\'data:image/jpeg;base64,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\')';
  //   }else {
  //     this.backgroundImageUrl = 'url(\'https://img.freepik.com/premium-photo/scenic-view-landscape-against-sky_1048944-401436.jpg?size=626&ext=jpg&ga=GA1.2.736665098.1706879640&semt=ais_user\')';
  //   }
  // }

  onLocationChange(location: string): void {
    this.shared.changeLocation(location);
  }
}
