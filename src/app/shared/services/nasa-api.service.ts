import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../model/apod';
import { Observable } from 'rxjs';


const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
const API_KEY = '9TbUY6oyoMXRXJE9pBfXRGK4W3zoMKHr8U1u4I88';
@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  //  DI => (Injector de dependencias)
  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod> {
    // return this.data;
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);

  }

  getMarsImages(camera: string): Observable<any> {
    return this.httpClient.get(`${MARS_URL}&camera=${camera}&api_key=${API_KEY}`);
  }
}
