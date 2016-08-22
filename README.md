# MakerSquare Full Stack Coding Challenge

## Goals: Create a Agricultural Commodities App that displays and interacts with produce data returned from the Connecticut Agricultural Commodity API.

[Agricultural Commodity API Data](https://data.ct.gov/Environment-and-Natural-Resources/Agricultural-Commoditites-Grown-By-Farmer/hma6-9xbg)

[Agricultural Commodity API Endpoint](https://data.ct.gov/resource/y6p2-px98.json)

This challenge is designed to test your ability to create a full stack application using the following:

* JavaScript
* A Frontend Framework
* A Backend Framework
* RESTful APIs
* CSS and UI
* Deployment

Important Notes:
* **Deadline:** Project is due EOD today (Tuesday) at 10pm. No commits made after the deadline will be considered when grading.
* After deploying your app or by 10pm today fill out the [completion survey](https://goo.gl/forms/80FlrDqvwp4kxuAi2). **You MUST fill out this survey by EOD, even if you were not able to fully complete the CA.**
* All work on CA must be pushed up to your forked MKS-LA-Assessment repo by deadline.
* View the grading rubric [here](https://docs.google.com/document/d/1TYhcbskRUkkfi_5MMdDwp9rBDPGsgMBwjmp1T3y8oWA/edit).
* You may ask fellows clarifying questions that are non-technical.
* Your application can use third-party libraries and/or modules, but may not use any boilerplate or starter applications.
* You may reference documentation, resources written by other devs, or Stack Overflow questions when researching a solution to a specific technical question, but copying code that other students, developers, or you have previously written will be considered academic dishonesty. If you didn't write it, and you don't fully understand what each line of code is doing, you should not include it in your app. Please clarify any concerns with a fellow.


## Requirements

### Frontend (Angular, Backbone or React)
   1. Required Features
      1. Display following properties of data returned from your server: Business Name, Address, Category and Food Name.
      2. Search feature that allows users to query api for a specific category of food.
      3. Have appropriate error handling and form validation for all features.
   2. Additional Feature Pool (Choose One)
      1. Create a JSON object with image urls for at least 10 food items in the API. Display a photo of the item if the API data includes that item, otherwise show a default photo.
      2. Have a loading spinner display when data is being queried or loaded.
      3. Order-by feature that orders data by business name, address or item name.

### API
    1. Note: If you are asked to input credentials:
      1. Signup and register your application for an application token. See: https://data.smgov.net/login
      2. You can use X-App-Token to pass your token through a custom header.
      3. You do not need to use OAuth2 or pass the app token through your query string. See Authenticating Requests: https://dev.socrata.com/docs/app-tokens.html)

### Backend
   1. Required Features
      1. Create a Node/Express server with routes to serve index.html, tree data, and a 404 page.
      2. Have the backend interact with the [Agricultural Commodities API](https://data.ct.gov/resource/y6p2-px98.json)
      3. Send API data back to client.
      3. Use a RESTful Architecture.

### Styling
   1. Required Features
      1. Styled using one of the following:
         * Vanilla CSS
         * Bootstrap / Foundation / Material
         * Or a CSS library of your choice

### Deployment
   1. Required Features
      1. Deploy application to Heroku using the free tier.
