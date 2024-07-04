import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5';
  private apiKey = '9e34ffc2d1fb6d2b9713157e7ac315c8'; // Replace with your API key

  constructor(private http: HttpClient) {}

  // Get current weather by city name
  getCurrentWeatherByCityName(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric'); // Units can be 'metric' (Celsius) or 'imperial' (Fahrenheit)
    return this.http.get(`${this.apiUrl}/weather`, { params });
  }

  // Get weather forecast by city name
  getWeatherForecastByCityName(city: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric');
    return this.http.get(`${this.apiUrl}/forecast`, { params }).pipe(
      map((response: any) => response.list)
    );
  }
}
