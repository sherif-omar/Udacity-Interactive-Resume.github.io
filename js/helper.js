/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = "<h1 id='name' class='orange-text'>%data%</h1>";
var HTMLheaderRole = "<span class='white-text'>%data%</span><hr/>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>twitter</span><a class='inline' class='white-text'  href='#'>%data%</a></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>github</span><a class='inline class='white-text' href='#'>%data%</a></li>";
var HTMLlinkedin = "<li class='flex-item'><span class='orange-text'>linkedin</span><a class='inline class='white-text' href='#'>%data%</a></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>location</span><span class='white-text'>%data%</span></li>";

var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLWelcomeMsg = "<span class='welcome-message col-md-2'>%data%</span>";

var HTMLskillsStart = "<div class='col-md-6 col-md-4 well well-sm'><h4 class='orange-text col-md-2'>Skills: &nbsp;</h4><ul id='skills' class='col-md-10'></ul></div>";
var HTMLskills = "<li ><span class='text-primary col-md-12'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<a href='#'>%data%";
var HTMLworkTitle = " - %data%</a>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p><br>%data%</p><br>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "%data%";
var HTMLprojectUrl = "<a href='%dataurl%'>%datatitle%</a>";

var HTMLprojectDates = "<div class='date-text'>%data%</div>";
var HTMLprojectDescription = "<p><br>%data%</p>";
var HTMLprojectImage = "<img src='%data%'><br>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = " -- %data%</a>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em><br>"

var HTMLonlineClasses = "<h3 style='margin-left: -30px;'>Online Classes</h3>";
//var HTMLonlineURLS = "";
var HTMLonlineTitle = "<a href='%dataurl%'>%data%";
var HTMLonlineSchool = "<br />by %data%</a>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "%data%</a><br>";

//var internationalizeButton = "<button>Internationalize</button>";
