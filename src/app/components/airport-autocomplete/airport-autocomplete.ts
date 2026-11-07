import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, of, switchMap } from 'rxjs';
import { Airport } from '../../models/airport.model';
import {AirportLookup} from '../../services/airport-lookup'
import { AsyncPipe, JsonPipe } from '@angular/common';
@Component({
  imports: [ReactiveFormsModule,
    AsyncPipe,
    JsonPipe
  ],
  selector: 'app-airport-autocomplete',
  styleUrl: './airport-autocomplete.css',
  templateUrl: './airport-autocomplete.html',
})
export class AirportAutocomplete implements OnInit {
constructor(
  private airportService: AirportLookup
) {}
  searchControl = new FormControl('');

  airports$: Observable<Airport[]> = of([]);

  selectedAirport: Airport | null = null;

  highlightedIndex = -1;
dropdownOpen = true;
airportsList: Airport[] = [];
 ngOnInit(): void {
  this.airports$ = this.searchControl.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((term) =>
      this.airportService.searchAirports(term ?? '')
    )
  );
this.airports$.subscribe(airports => {
  this.airportsList = airports;
  this.dropdownOpen = !!this.searchControl.value?.trim();
  this.highlightedIndex = -1;
});
  // this.airports$.subscribe((airports) => {
  //   this.airportsList = airports;
  // });
}

selectAirport(airport: Airport): void {
  this.selectedAirport = airport;
  this.searchControl.setValue(airport.code, { emitEvent: false });
  this.dropdownOpen = false;
  this.highlightedIndex = -1;
}


onKeyDown(event: KeyboardEvent, airports: Airport[]): void {
  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault();

      if (airports.length > 0) {
        this.highlightedIndex =
          (this.highlightedIndex + 1) % airports.length;
      }
      break;

    case 'ArrowUp':
      event.preventDefault();

      if (airports.length > 0) {
        this.highlightedIndex =
          this.highlightedIndex <= 0
            ? airports.length - 1
            : this.highlightedIndex - 1;
      }
      break;

    case 'Enter':
      event.preventDefault();

      if (this.highlightedIndex >= 0) {
        this.selectAirport(airports[this.highlightedIndex]);
      }
      break;

    case 'Escape':
  this.dropdownOpen = false;
  this.highlightedIndex = -1;
  break;
  
}

}
}