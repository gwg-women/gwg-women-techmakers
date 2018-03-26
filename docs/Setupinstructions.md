### Following these instructions will enable you to run the app locally with your own Google Maps API key.
This is an essential first step to contributing to this project.

#

[Special instructions for beginners](http://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html) - Follow these steps up to "Give GitHub your public keys".



<summary>General Set Up Instructions</summary><p>

1. <details><summary>Fork the repository to your github.</summary>

    * To **fork** the project, head over to [gwg-women-techmakers](https://github.com/gwg-women/gwg-women-techmakers) and fork the project into your own github.

    * Head into your forked project and click the green button that says **Clone or download** to see the URL to use to fork into your own computer. It should look a little something like this:

        ```https://github.com/<your_username>/gwg-women-techmakers.git```

    * Open your command shell of choice and navigate to the folder where you want your project to be in. Type in:

        ```git clone https://github.com/<your_username>/gwg-women-techmakers.git```
</details>


2.  <details><summary>How to get your own API key</summary>

    *  Get Google Maps API

        - Go to the [Google API Console](https://console.developers.google.com/apis)
        - [Create or select a project for Google Maps Android Backend API](https://console.developers.google.com/flows/enableapi?apiid=maps_android_backend&reusekey=true) or search for it in **Library** panel
        - [Create or select a project for Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/get-api-key) or find it in **Library** panel
        - In Google API Console check to see if the APIs are enabled in **Enabled APIs and services** panel
        - In Google API Console retrieve your **API key** inside the **Credentials** panel.


    * Get a OpenWeatherMap API key:
        - Go to the [OpenWeatherMap how to start](https://openweathermap.org/appid) page and click sign up
        - Create a free account
        - Go to the API Keys tab
</details>

2. <details><summary> Getting it running </summary>

    * **Installing Dependencies**:
        - Navigate inside **gwg-women-techmakers** folder with your command shell and install all dependencies with your package manager of choice.
            * NPM:
        `npm install`
            * Yarn:
        `yarn install`
    * **Inserting your API key**:
        - Inside the directory, find **.env.example** and create a copy and name it **.env**.

        NOTE: .env is in .gitignore and will not be uploaded to your github.

        - Your API key inside your environment variable (.env) should start with **REACT_APP**.
            - Google's API should look this:

                ```REACT_APP_GKEY: api_key```
            - Weather's API should look like this:

                ```REACT_APP_WEATHERKEY: api_key```

    * **Starting the APP**:

        * Build everything together with your package manager of choice:
            * NPM:
            `npm run build` or `npm build`

            * Yarn:
            `yarn build`

        * Start it!:
            * Run the app by typing in:
                * NPM:
                ```npm start```

                * Yarn:
                ```yarn start```

        You should be able to see it run on localhost:3000. That's it!
</details>

</p>
