![icon](src/images/icon.png)

## ReactJS Capstone Project for Epicodus, October 5, 2017
**_By Calla Rudolph_ [(e-mail me here)](<mailto:callarudolph@gmail.com>)**

## Description
This is an app to visit when having a gloomy day. The user can input a range of how sad he is feeling, as well as his name and something that is bothering him. The app will then make five API calls to display uplifting quotes, statements, and photos to encourage the user to feel better. There is a notes section for the user to write out how he is feeling, in order to release upsetting thoughts from his mind.

This app uses ReactJS with Redux to save user input and make API calls with Thunk Middleware. Persistent data is also stored through Middleware. React-Router and UUID are utilized for component transitions and unique state keys.

## Screenshots

![home](/src/images/home.png)

![input](/src/images/input.png)

![display](/src/images/display.png)

![notes](/src/images/notes.png)

![about](/src/images/about.png)

## Prerequisites
* [Node.js](https://nodejs.org/) (with NPM)
* In order to successfully make API calls to these APIs, make sure your browser (Chrome preferred) has a [CORS extension](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) installed and enabled

## Installation Instructions
* Open Terminal and type:
* `$ cd Desktop`
* `$ git clone https://github.com/CallaRudolph/pick-me-up`
* `$ cd pick-me-up`
* `$ npm install`
* `$ atom .`

### Serving Program
* In Terminal, run `$ npm run start`
* In your Browser (Chrome preferred) navigate to [http://localhost:8080/](http://localhost:8080/)

## Technologies used
* [Node.js](https://nodejs.org/) (with NPM)
* [ReactJS](https://facebook.github.io/react/)
* [Redux](http://redux.js.org/)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* Bootstrap/CSS
* HTML

## API Shout Outs

* [forismatic](https://forismatic.com/en/api/) ~ motivational quotes
* [The Cat API](http://thecatapi.com/) ~ random cat photos
* [FOAAS](https://www.foaas.com/) ~ asks someone to f--- off, kindly
* [Ron Swanson quotes](https://github.com/jamesseanwright/ron-swanson-quotes)
* [The Dog API](https://www.thedogapi.co.uk/documentation.php) ~ random dog photos

## Future Functionality

* The ability to save enlightening motivational quotes and other API responses.
* Additional inputs for extra user information to make extra API calls (i.e. comfort food and location to search for restaurants and meetups nearby)
* UI Animations & Interactivity, such as Router Transitions

What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

* Yelp API (oAuth)
* Meetup API (oAuth)
* Firebase to save API responses


## License Information
**Copyright &copy; 2017 Calla Rudolph**

_Please email me at the above address with any comments or improvements you have found!_

This software is licensed under the MIT license.
