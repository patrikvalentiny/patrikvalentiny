import {inject, Injectable, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {TimeSeries, WeatherDto} from "./weatherDto";
import {firstValueFrom, Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {
  private readonly httpClient = inject(HttpClient);
  private readonly headers: HttpHeaders = new HttpHeaders();
  forecast: WritableSignal<WeatherDto | null> = signal<WeatherDto | null>(null);
  private forecastExpires: Date | null = null;
  constructor() {
    this.headers.append("User-Agent", "testingapi patrikvalentiny@gmail.com")
  }

  async ngOnInit() {
    const forecast = await this.getLocalForecast();
  }

  async getForecast(lat:number, lon:number):Promise<WeatherDto | null> {
      if (!this.forecast() || !this.forecastExpires || (this.forecastExpires && this.forecastExpires < new Date())) {
        const call = this.httpClient.get<WeatherDto>(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`, {
          headers: this.headers,
          observe: 'response'
        });
        const response = await firstValueFrom<HttpResponse<WeatherDto>>(call);
        const headers = response.headers;
        this.forecastExpires = new Date(headers.get('Expires') ?? "");
        this.forecast.set(response.body);
        return response.body;
      } else {
        return this.forecast();
      }
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
