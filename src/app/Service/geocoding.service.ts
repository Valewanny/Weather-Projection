import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private apiUrl = 'https://api.opencagedata.com/geocode/v1/json';
  private apiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your API key

  constructor(private http: HttpClient) {}

  // Geocode location by name
  geocodeLocation(location: string): Observable<any> {
    const params = new HttpParams()
      .set('q', location)
      .set('key', this.apiKey);
    return this.http.get(`${this.apiUrl}`, { params }).pipe(
      map((response: any) => response.results)
    );
  }

  // Reverse geocode by coordinates
  reverseGeocode(lat: number, lng: number): Observable<any> {
    const params = new HttpParams()
      .set('q', `${lat},${lng}`)
      .set('key', this.apiKey);
    return this.http.get(`${this.apiUrl}`, { params }).pipe(
      map((response: any) => response.results)
    );
  }
}
