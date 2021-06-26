import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  flatMap,
  map,
} from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Country } from '../country';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  contentLoaded: boolean = false;
  searchText: string;
  filterOption: string;
  countries: Country[] = [];
  countriesPayload: Country[] = [];
  conts = ['Asia', 'Africa', 'Americas', 'Europe', 'Oceania'];

  public keyUp = new Subject<string>();

  constructor(
    private apiService: ApiService,
    public modeService: ModeService,
    private router: Router
  ) {
    this.apiService.getCountries().subscribe((data) => {
      //console.log(data);
      this.countries = data;
      this.countriesPayload = data;
      setTimeout(() => {
        this.contentLoaded = true;
      }, 1000);
    });

    const subscription = this.keyUp
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        flatMap((search) => of(search).pipe(delay(500)))
      )
      .subscribe(() => {
        this.onSearchChange();
      });
  }

  ngOnInit(): void {}

  onSearchChange(): void {
    console.log(this.searchText);
    if (this.searchText.trim() === '') this.countriesPayload = this.countries;
    else {
      this.countriesPayload = this.countries.filter((country) => {
        if (
          country.name
            .toLowerCase()
            .includes(this.searchText.trim().toLowerCase())
        )
          return country;
      });
    }
  }

  getCountryDetails(data) {
    console.log(data);
    this.router.navigate(['country', data]);
  }

  onOptionSelect() {
    console.log(this.filterOption);
    debounceTime(1000);
    this.countriesPayload = this.countries.filter((country) => {
      if (country.region.toLowerCase() === this.filterOption.toLowerCase())
        return country;
    });
  }
}
