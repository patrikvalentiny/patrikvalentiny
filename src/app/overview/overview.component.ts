import {Component, effect, inject, OnInit} from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  private readonly weatherService: WeatherService = inject(WeatherService);

  userLocation: string = "";
  currentDate: Date = new Date();
  currentTemperature: number = 0;
  windSpeedKmh: number = 0;
  precipitation: number = 0;

  constructor() {
    effect(() => {
      const forecast = this.weatherService.forecast();
      if (forecast) {
        this.currentDate = new Date(forecast.properties.timeseries.at(0)?.time ?? "");
        this.currentTemperature = forecast.properties.timeseries.at(0)?.data.instant.details?.air_temperature ?? 0;
        this.windSpeedKmh = forecast.properties.timeseries.at(0)?.data.instant.details?.wind_speed ?? 0;
        this.precipitation = forecast.properties.timeseries.at(0)?.data.next_1_hours?.details?.precipitation_amount ?? 0;
      }
    });
  }

  async ngOnInit() {
    this.userLocation = "Trnie"
  }
}
