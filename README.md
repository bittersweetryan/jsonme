jsonmé
=======

jsonmé is a simple HTML/CSS/JS application that allows you to store your resumé's contents in a json file and display it as a nicely formatted webpage. It's built using Sizzle.js and Snack.js, two small and focused libraries instead of using a multi-pupose library like jQuery.

##Usage
The easiest way to use jsonmue is to create a GitHub page for your account and copy this repo into it.  Once you have your repository modify the resume.json file to match your skills/qualifications.  

###Excluding Content
Sections can be excluded from the output by removing them from the json file, for instance to remove "Speaking Engagements" from the output, just remove the "speaking" key from the JSON file.

_The Name, About Me, and Objective sections cannot be removed.  If you'd like to remove them you can comment out those sections in index.html._

##Customizing
jsonmé uses two .scss files, /scss/site.scss and /scss/small.scss.  site.scss is for devices with a width > 480px and has the full layout of the site.  small.scss is for devices <= 480 px and scales down the navigation and site.  

##demo
http://bittersweetryan.github.com/jsonme