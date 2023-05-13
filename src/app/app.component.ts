import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(private weatherService: WeatherService) {}

    // this is the starting value of the variable, when the page loads 1st time
    cityName: string = 'Montréal';
    weatherData?: WeatherData;

    // function fires when website loads
    ngOnInit(): void {
        // this calls the function passing Montreal, which is the default
        this.getWeatherData(this.cityName);
        // this cleans the name from the input /search bar
        this.cityName = '';
    }

    // when hitting SUBMIT in the INPUT
    onSubmit() {
        // this calls the function passing the city in the search bar
        this.getWeatherData(this.cityName);
        // this cleans the name from the input /search bar

        this.cityName = '';
    }

    // function that calls the API
    private getWeatherData(cityName: string) {
        this.weatherService.getWeatherData(cityName).subscribe({
            next: (response) => {
                // console.log('this is the response');
                // console.log(response);
                this.weatherData = response;
            },
        });
    }
}
