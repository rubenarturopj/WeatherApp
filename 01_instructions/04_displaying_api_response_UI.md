# Displaying the response on the UI

1. In `app.component.ts`, create a new variable with the types we have in the `weather.model.ts`. After getting the response, we are going to set the response as the value of this variable. After doing this we can use the response in the HTML file.

2. Go to `app.component.html`. Make a copy of the `<Container>` component and comment it out. This will be a backup. Wea re going to work on the other one.

3. Create contidional rendering: `*ngIf="weatherData"` which is equivalent to reacts `{hasValue ? this : that/null }`. Start changing the rest of the values and make it dynamic.

It all works great

## Add the Search City input to render dynamically

1. In `app.component.html` create another div to add the Search input. Syle this div.

2. Now we need to import `FormsModule` in `app.module.ts`.

3. Go to `app.component.html` and add a tag to the form `#ngForm` and add the onSubmit method `(submit)="onSubmit"`.

4. Also add a name property to the `input`: ` name="city" [(ngModel)]="cityName"`. After adding this, i can now use this variable in my following function.

5. in `app.components.ts` cut the content of the INIT function and create another function below called `private` and paste it there.

6. Now let's create this component in `app.components.ts`. Below `ngOnInit()` write this method/function: `onSubmit(){}`
