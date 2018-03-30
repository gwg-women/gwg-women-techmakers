# gwg-women-techmakers
This is a Grow with Google project for an offline first app that provides information based on location and search.

## Current Contributors Profiles
See the current contributors [here](contributors.md)

## Getting Started
Read the the [Set Up Instructions](Setupinstructions.md) on our wiki.


## Contributing to the Project
Please read the [contribution guidelines](contributionguidelines.md) on the wiki to see how to get started with solving issues and creating pull requests.


## The repository uses the following files :

* **public/index.html** : The main HTML page. Contains links to all of the CSS resources needed to render the map and results. It also loads results of  Google Maps API asynchronously.

* **src/index.js**: is the JavaScript entry point.

* **src/components**: Contains all the controls.
***Description.js**
Contains the Wiki component that displays the Wikipedia information about the current city.

***Header.js***
Get's the current location and weather conditions and displays the information on the header.

***InitialMap.js***
Get's and displays the map with markers to the search results.

***Places.js***
Displays the searchResults in the form of a list on the left side of the app.

***PlacesListItem.js***
Contains the ListItems control that displays all the list items. It displays the name address and opening hours of a place.

***Search.js***
Get's the user Input for search query.

* **src/css/index.css**
Contains the styles of the App

* **src/services** folder has the code that makes calls to the location, map and weather API's and fetches their results.

***geolocation.js***

***weather.js***

* **registerServiceWorker.js** checks for and registers the service worker for the application.

## Some Packages Used ##
    npm

    react

    react-dom

    react-scripts

    cra-append-sw

    google-maps-react


## Motivation

This project is made as part of the GROW With GOOGLE Challenge for practicing
* Creating Progressive web applications
* Registering and create a service worker
* Creating a REACT web application
* Collaborating using GIT
* Interacting with API servers
* Use of third-party libraries and APIs
* Use Google Maps
