![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Wildside: created by Olly Middleton, Jack May and Max Eskell

<h1> Wildside walks </h1>
A REST app, built to allow people to find, create and share their favourite wildlife walks.

<figure>
	<a href="https://wildside-walks.herokuapp.com//">
    <img src="http://i.imgur.com/UooXH1b.png">
  </a>
	<figcaption>
      The app name Wild Side is meant to appeal to the users sense of adventure, to explore a new route they've not walked along before.
  </figcaption>
</figure>

<h2> Getting started </h2>
Download or fork the code and save it to your preferred directory.  

<h3> Installing </h3>
Run Yarn to install all the developer and deployment dependencies </br>
```yarn```

Install Yarn if you do not have it </br>
```brew install yarn``` <a href="https://yarnpkg.com/lang/en/docs/install/"> find help here</a>

You can then use Gulp to automate the workflow </br>
```gulp```

Install gulp if you do not have it (preferably globally)
```npm install --global gulp-cli``` <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md"> find help here </a>

If you want to use AWS to store images, or make use of the Facebook or Github Oauth, you will need to update the environmental variables and set these up on their respective website.

Helpful links:
<ul>
<li><a href="https://aws.amazon.com/console/"> AWS console </a></li>
<li><a href="https://github.com/">Github</a></li>
<li><a href="https://developers.facebook.com/">Facebook for developers </a></li>
</ul>

<h2> Running tests </h2>
There is a comprehensive test suit included within the app.

There are tests on authentication and on CRUD of resources.

Test coverage is ~60%: </br>
Statements   : 65.13% ( 198/304 ) </br>
Branches     : 49.44% ( 44/89 ) </br>
Functions    : 64.86% ( 24/37 ) </br>
Lines        : 69.2% ( 191/276 ) </br>

<figure>
	<a href="https://wildside-walks.herokuapp.com//">
    <img src="http://i.imgur.com/2yHWzUs.png">
  </a>
	<figcaption>
      Each walk is illustrated on a map and has accompanying images, users can also mark the trail as completed so it appears in their profile. If the trail belongs to the user, they can edit it. 
  </figcaption>
</figure>

<h2> Deployment </h2>
The app is built to de deployed on Heroku.  
<ul>
<ol>Environmental variables need to be uploaded to HEROKU (including API ID and CLIENT SECRETS) </ol>
<ol>Ensure that Facebook and Github settings (online) direct the user to the correct url.</ol>
</ul>


<h2> Built with </h2>
This is a MEAN app (MongoDB, Express, Angular and Node).

<h2> Versioning </h2>
Current version is 1.0.  We plan to release v1.1 in the near future with the following enhancements:
<ul>
<li> An improved trails page that zooms to show the user on the map, their nearest five routes, and proximity distance of those walks from their current location </li>
<li> New sliders on to the trails page that filter walks by: distance to current location, trail length & difficulty </li>
<li> Accessibility information provided on all routes. Users will be able to record whether it is good for walking, cycling, wheelchairs and prams </li>
<li> Enhanced trail creation and edit pages that allow users to add tags to their route based on the wildlife that can expect to see on their route. Users can then also filter trails based on wildlife that want to see </li>
<li> Improved comments section that allows people to upload images to go with their comment (e.g. wildlife they saw) </li>
<li>  New profile page that will enable people to edit their user profile </li>
<li> Inclusion of the Unsplash API so if people have difficulty uploading or don't want to upload a picture, they can submit a photo from the API instead </li>
</ul>

<h2> Licence </h2>
This project is licensed under the MIT License - see the LICENSE.md file for details

<h2> Acknowledgements </h2>
This project would not have been possible without:
Mike Hayden,  Emily Isacke, Mark Davis & Sam Domesjo
