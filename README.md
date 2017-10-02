## Pick Me Up

_Project’s Purpose or Goal: An app to visit when having a gloomy day._

###### List the absolute minimum features the project requires to meet this purpose or goal:

* The user will enter in several keywords to be used for API calls: [x: something currently bothering the user, y:  number from 1-10, z: user name]

* After submit, the app will make four API calls to retrieve: 1. a motivational quote, 2. a picture of a cat, 3. a fun statement to tell [x] to f*** off from [z], 4. a list of Ron Swanson quotes  based on number [y].

* API responses will be beautifully-displayed throughout the app in a light-hearted way to help the user improve his mood.

##### What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.

* ReactJS with Redux to save user input and make API calls with Thunk Middleware, Node.js for dependencies, Webpack and Babel for transpiling and loading into browser.  

* Bootstrap/CSS for custom styling.

* API services: forismatic (motivational quote), The Cat API (random cat photos), FOAAS (asks someone to f*** off, kindly), and Ron Swanson quotes API.

##### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.

* Add Modal feature for user input form.
* Blog feature for user to type up some daily issues.
* The ability to save enlightening motivational quotes and other API responses.
* Additional inputs for extra user information to make extra API calls (i.e. comfort food and location to search for restaurants and meetups nearby)
* UI Animations & Interactivity, such as Router Transitions

##### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?

* Yelp API (oAuth)
* Meetup API (oAuth)
* Custom middleware to persist data locally (such as saved API responses or blog entries)
* Additional research for more APIs through programmableweb.com

--------

Component Structure:
* App --> Header, Input, Footer
* Header --> Link display to About and Display Components
* Footer --> some nice words
* About --> About the project and myself
* Input --> Input form for user to enter responses, Display component nested
* Display --> Four API responses displayed
