import {Component, inject, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";
import {TimeSeries} from "../weatherDto";

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrl: './hourly-forecast.component.css'
})
export class HourlyForecastComponent implements OnInit {
  private readonly weatherService: WeatherService = inject(WeatherService);
  series:TimeSeries[] = [];
  constructor() { }

  async ngOnInit() {
    const forecast = await this.weatherService.getLocalForecast()
    if (forecast){
      this.series = forecast.properties.timeseries.filter((_, index) => index < 63 && index % 3 === 0);
    }
  }

}
