import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WeatherDto} from "./weatherDto";
import {firstValueFrom} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly httpClient = inject(HttpClient);
  private readonly headers: HttpHeaders = new HttpHeaders();
  constructor() {
    this.headers.append("User-Agent", "testingapi patrikvalentiny@gmail.com")
  }

  async getForecast(lat:number, lon:number):Promise<WeatherDto | null> {
    const call =  this.httpClient.get<WeatherDto>(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`, {headers: this.headers})
    return await firstValueFrom<WeatherDto>(call);
  }
  async getLocalForecast(){
    const location = await this.getCurrentLocation();
    const latitude = location.coords.latitude;
    const longitude = location.coords.longitude;
    return await this.getForecast(latitude, longitude)

  }
  private getCurrentLocation(){
    return new Promise<GeolocationPosition>((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position);
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject(new Error("Geolocation is not supported"));
      }
    });
  }
}
