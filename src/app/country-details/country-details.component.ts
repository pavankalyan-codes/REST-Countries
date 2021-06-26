import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  name: string;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.name = params['id'];
      console.log(this.name);
      this.apiService.getCountryDetails(this.name).subscribe((data) => {
        console.log(data);
      });
    });
  }

  goBack() {}
}
