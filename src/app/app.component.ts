import {Component, inject, OnInit} from '@angular/core';
import {WeatherService} from "./weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private readonly weatherService:WeatherService = inject(WeatherService);
  title = 'portfolio';


  async ngOnInit() {
    await this.weatherService.getLocalForecast();
  }
}
