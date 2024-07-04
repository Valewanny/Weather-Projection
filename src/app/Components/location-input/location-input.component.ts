import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrl: './location-input.component.css'
})
export class LocationInputComponent {
  @Output() locationChanged = new EventEmitter<string>();

  constructor() { }

  onLocationChange(location: string) {
    this.locationChanged.emit(location);
  }
}
