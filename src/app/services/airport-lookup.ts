import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Airport } from '../models/airport.model';

@Service()
export class AirportLookup {
     private http = inject(HttpClient);


  getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>('/assets/airports.json');
  }

  searchAirports(term: string): Observable<Airport[]> {

    return this.getAirports().pipe(

      map((airports) => {

        const searchTerm = term.trim().toLowerCase();

        if (!searchTerm) {
          return [];
        }

        return airports.filter((airport) =>
          airport.code.toLowerCase().includes(searchTerm) ||
          airport.city.toLowerCase().includes(searchTerm)
        ).slice(0, 5);

      })

    );
  }
}
