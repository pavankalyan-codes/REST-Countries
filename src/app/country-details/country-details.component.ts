import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  name: string;
  contentLoaded: boolean = false;
  country: any = {};
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location,
    public modeService: ModeService
  ) {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      console.log(this.name);
      this.apiService.getCountryDetails(this.name).subscribe((data) => {
        console.log(data);
        this.country = data[0];
        this.contentLoaded = true;
      });
    });
  }

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}
