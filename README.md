# gwg-women-techmakers
This is a Grow with Google project for an offline first app that provides information based on location

Need to decide:
Whether we use geolocation or use the search box instead

Working version demo
https://script.google.com/macros/s/AKfycbyeAP8n-wwIYmGGqStDIRcxnVa8QtA-RDKpgsiPCudzWVA7VByd/exec

Detailed instructions for getting set update. I am currently set up with cloud9 and have included instructions for cloud9, but feel free to ignore those


1) for absolute noobs follow steps here http://dont-be-afraid-to-commit.readthedocs.io/en/latest/git/commandlinegit.html upto "Give Github your public keys". 
This next part is for cloud9 users ONLY to copy your C9 ssh key to github so you are authenticated. You will then NOT need to type in your credentials each time. 

Otherwise skip to 2)

    a) Go to https://c9.io/account/ssh and copy the key below *"Connect to your private git repository"*. It's a very long string that starts with ssh-rsa and ends with your email.	

    b) Paste your C9 ssh key into your GitHub account Go to https://github.com/settings/keys and click New SSH key. 

    c) Enter a title (eg  Cloud9 ), paste the ssh key that you copied in the previous step, and click Add SSH key

    d) Now, "clone with SSH" instead of "clone with HTTPS" This means that, when you type in git remote add origin, you should use a link that looks like this: *git@github.com:*YOUR_USER_NAME/YOUR_REPO_NAME.git. Pay attention to how that differs from *https://github.com/*YOUR_USER_NAME/YOUR_REPO_NAME.git

    e) While the first creates a remote that uses ssh authentication, the latter uses https, so it'll always prompt you to enter your username and password to authenticate the connection. (credit)

2) Go to where the directory of package.json is and type npm install This will install all the dependencies

3) Get a Google Maps API key
a) Go to the Google API Console.
b) Create or select a project.
c) Click Continue to enable the Google Maps API (https://console.developers.google.com/flows/enableapi?apiid=maps_android_backend&reusekey=true)
d) On the Credentials page, get an API key. 
Detailed instructions/more (https://developers.google.com/maps/documentation/android-api/signup)

4) In the file master->app.js replace mykey with your Google Maps key
    "https://maps.googleapis.com/maps/api/js?key=key&libraries=places&callback=initAutocomplete"
5) Run the app
6) You should be able to see it run on localhost
