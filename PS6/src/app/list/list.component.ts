import { Component, OnInit } from '@angular/core';
import {CITIES} from '../data/citiesMOCK';
import {CITY} from '../data/cities';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cities: CITY[] = CITIES;
  selectedCity: CITY;

  constructor() { }

  ngOnInit(): void {
  }

  showTemperature(city: string) {
    this.selectedCity = this.cities.find(city => city.name === city);
  }

}
