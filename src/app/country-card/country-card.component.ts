import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {
  @Input() country: Country;

  @Output() cardClicked: EventEmitter<String> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitCountryName() {
    this.cardClicked.emit(this.country.name);
  }
}
