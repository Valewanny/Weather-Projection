import { Component } from '@angular/core';
import { GeocodingService } from '../../Service/geocoding.service';
import { MySharedService } from '../../shared/my-shared.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor( private shared: MySharedService) {}

  // onLocationChange(location: string): void {
  //   this.geocodingService.geocodeLocation(location).subscribe(
  //     (data: any[]) => {
  //       console.log('Geocoding result:', data);
  //       // Handle the geocoding result here
  //       if (data && data.length > 0) {
  //         const cityName = data[0].formatted;
  //         this.shared.changeLocation(cityName);
  //       }
  //     },
  //     (error) => {
  //       console.error('Error geocoding location:', error);
  //     }
  //   );
  // }
  onLocationChange(location: string): void {
    this.shared.changeLocation(location);
  }
}
