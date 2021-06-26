import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Country } from '../country';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  searchText: string;
  filterOption: string;
  countries: Country[] = [];
  countriesPayload: Country[] = [];
  conts = ['Asia', 'Africa', 'Americas', 'Europe', 'Oceania'];
  constructor(private apiService: ApiService) {
    this.apiService.getCountries().subscribe((data) => {
      //console.log(data);
      this.countries = data;
      this.countriesPayload = data;
    });
  }

  ngOnInit(): void {}

  onSearchChange(searchValue: string): void {
    if (searchValue.trim() === '') this.countriesPayload = this.countries;
    else {
      this.countriesPayload = this.countries.filter((country) => {
        if (
          country.name.toLowerCase().includes(searchValue.trim().toLowerCase())
        )
          return country;
      });
    }
  }

  onOptionSelect() {
    console.log(this.filterOption);
    this.countriesPayload = this.countries.filter((country) => {
      if (country.region.toLowerCase() === this.filterOption.toLowerCase())
        return country;
    });
  }
}
