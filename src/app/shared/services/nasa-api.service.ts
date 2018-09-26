import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

    private readonly data: Apod = {
    date: '2018-07-20',
    explanation: 'What causes Hubbles Variable',
    hdurl: 'https://apod.nasa.gov/apod/image/1711/HubblesVariableNebula',
    media_type: 'image',
    service_version: 'v1',
    title: 'What Causes Hubbles Variable',
    url: 'https://apod.nasa.gov/apod/image/1711/HubblesVariableNebula'
  };

  constructor() { }

  getApod(): Apod {
    return this.data;
  }
}
