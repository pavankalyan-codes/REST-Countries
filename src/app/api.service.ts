import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Country } from './country';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://restcountries.eu/rest/v2/all';
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        //console.log(res);
        let countries: Country[] = [];
        res.forEach((country) => {
          countries.push(
            new Country(
              country.name,
              country.population,
              country.region,
              country.capital,
              country.flag
            )
          );
        });
        return countries;
      })
    );
  }
}
