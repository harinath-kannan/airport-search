import { Component, signal } from '@angular/core';
import { AirportAutocomplete } from './components/airport-autocomplete/airport-autocomplete';

@Component({
  imports: [AirportAutocomplete],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('airport-search');
}
