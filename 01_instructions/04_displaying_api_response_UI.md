# Displaying the response on the UI

1. In `app.component.ts`, create a new variable with the types we have in the `weather.model.ts`. After getting the response, we are going to set the response as the value of this variable. After doing this we can use the response in the HTML file.

2. Go to `app.component.html`. Make a copy of the `<Container>` component and comment it out. This will be a backup. Wea re going to work on the other one.

3. Create contidional rendering: `*ngIf="weatherData"` which is equivalent to reacts `{hasValue ? this : that/null }`. Start changing the rest of the values and make it dynamic.
