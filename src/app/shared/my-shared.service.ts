import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MySharedService {
  private locationSource = new BehaviorSubject<string>('Nairobi');
  currentLocation = this.locationSource.asObservable();

  constructor() {}

  changeLocation(location: string) {
    this.locationSource.next(location);
  }
}
