jsonmé
=======

jsonmé is a simple HTML/CSS/JS application that allows you to store your resumé's contents in a json file and display it as a nicely formatted webpage. It's built using Sizzle.js and Snack.js, two small and focused libraries instead of using a multi-pupose library like jQuery.

##Usage
This project will work on any web server.  Just copy the contents into any directory that is accessable by your server and update the contents of resume.json.  

The quickest way to get started is to fork this repository then rename it to &lt;yourgithubaccountname&gt;.github.com. Then edit the resume.json file to match your qualifications. GitHub will automatically generate the page for you.   

###Excluding Content
Sections can be excluded from the output by removing them from the json file, for instance to remove "Speaking Engagements" from the output, just remove the "speaking" key from the JSON file.

_The Name, About Me, and Objective sections cannot be removed.  If you'd like to remove them you can comment out those sections in index.html._

##Customizing
jsonmé uses two .scss files, /scss/site.scss and /scss/small.scss.  site.scss is for devices with a width > 480px and has the full layout of the site.  small.scss is for devices <= 480 px and scales down the navigation and site.  

##demo
http://bittersweetryan.github.com/jsonme

##ToDo

  * ~~Print Stylesheet~~
  * Change DD's to be stacked on mobile layout