# gwg-women-techmakers
This is a Grow with Google project for an offline first app that provides information based on location and search.

## Getting Started
Read the the [Set Up Instructions](https://github.com/gwg-women/gwg-women-techmakers/wiki/Set-Up-Instructions) on our wiki.

## Contributing to the Project
Please read the [contribution guidelines](https://github.com/gwg-women/gwg-women-techmakers/wiki/Contribution-Guidelines) on the wiki to see how to get started with solving issues and creating pull requests.


## The repository uses the following files :

* **public/index.html** : The main HTML page. Contains links to all of the CSS resources needed to render the map and results. It also loads results of  Google Maps API asyncronously.

* **src/index.js**: is the JavaScript entry point.

* **src/components**: Contains all the controls.
***Description.js**
Contains the Wiki component that displays the wikipedia information about the current city.

***Header.js***
Get's the current location and weather conditions and displays the information on the header.

***InitialMap.js***
Get's and displays the map with markers to the search results.

***Places.js***
Displays the searchResults in the form of a list on the leftside of the app.

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
* Creating Progressive web apllications
* Registering and create a service worker
* Creatinf a REACT web application
* Colaborationg using GIT
* Interacting with API servers
* Use of third-party libraries and APIs
* Use Google Maps
