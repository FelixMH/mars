import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';

@Component({
  selector: 'dev-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  constructor() { }

  ngOnInit() {
    this.apod = {
      date: '2018-07-20',
      explanation: 'What causes Hubbles Variable',
      hdurl: 'https://apod.nasa.gov/apod/image/1711/HubblesVariableNebula',
      media_type: 'image',
      service_version: 'v1',
      title: 'What Causes Hubbles Variable',
      url: 'https://apod.nasa.gov/apod/image/1711/HubblesVariableNebula'
    };
  }

}
