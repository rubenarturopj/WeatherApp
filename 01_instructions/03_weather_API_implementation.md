# Using a real weather API to feed our app

1. On the browser, go to `rapidapi.com` and look for `open weather map`. (sign ip if necessary). Choose method: Javascript and Fetch and grab the url `const url = 'https://open-weather-map27.p.rapidapi.com/weather';``.

2. In the `app` folder, create a new folder called `services`.

3. Go to the terminal and navigate to that new folder using the `cd` command.

4. Then type to create a service (weather is the name of the service i'm giving to it):

```sh
ng g s weather
```

This will create 2 files: `weather.service.spec.ts` and `weather.service.ts`.

5.  Go to `app.module.ts` in the `app` folder and make sure your app has the http module. So, in the `imports` add: `HttpClientModule`. Don't forget to import it on top `import {HttpClientModule} from "@angular/common/http"`.

6.  Go to `weather.service.ts` and inject the HTTP client now inside the constructor, here:

```sh
export class WeatherService {
    constructor(private http: HttpClient) {}
}
```

Also import it on top.
Add the URL from the api service.

7. Create some variables in `environment.ts`.

-   Newest version of ANGULAR doesn't have environments anymore. You can still add them by running:

```sh
ng generate environments
```

8. In the `weather.service.ts` add the base URL coming from the environment file and then the parameters.

9. Create a folder named `models` inside `app` folder. Inside create a file called `weather.model.ts`.

10. Test the endpoint of the API on its website and get the json file, transform it into trypescript using any internet app you find. Now copy all those interfaces for typescript and paste them in the `weather.models.ts`

11. Go back to `weather.service.ts` and map the response of the api call into this model. And import it on top.

12. Go to `app.component.ts` and do the modifications there.
