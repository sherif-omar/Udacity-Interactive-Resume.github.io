// Define variables here. 
var bio = {
 "name": "Sherif Omar",
 "role": "Web Developer",

 "contacts": {
  "mobile": "(002) 011-506-02332",
  "email": "mr.sherifomar@hotmail.com",
  "github": "sherifomar",
  "githubURL": "https://github.com/sherif-omar",
  "twitter": "-",
  "twitterURL": "#",
  "linkedin": "sherifomar",
  "linkedinURL": "https://www.linkedin.com/in/sherifdeveloper",
  "location": "Mansourah, Egypt"
  },

 "skills": ["JavaScript,",  "HTML/CSS,", "Ruby on Rails,", "Jquery,Json ", "php,", "and Bootstrap."],

 "bioPic": "images/fry.jpg"
}


var work = {
	"jobs": [
		{
			"employer": "",
			"title": "",
			"location": "",
			"dates": "",
			"description": ""
		},

		
	]
}

var projects = {
	"projects": [
		{
			"title": "Build a Portfolio Site",
			"dates": "2015",
			"description": "You will replicate a design mockup in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
			"images": [
				
			]
		},

		{
			"title": "Interactive Resume",
			"dates": "2015",
			"description": "You will develop an interactive resume application that reads your resume content from a JSON file and dynamically displays that content within a provided template. You will use objects, functions, conditionals, and control structures to compose the content that will display on the resume.",
			"images": [
				""
			]
		},

		{
			"title": "Classic Arcade Game Clone",
			"dates": "2015",
			"description": "You will be provided with visual assets and a game loop engine; using these tools you must add a number of entities to the game including the player characters and enemies to recreate the classic arcade game Frogger.",
			"images": [
				""
			]
		},

		{
			"title": "Website Optimization",
			"dates": "2015",
			"description": "You will optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.",
			"images": [
				""
			]
		},

		{
			"title": "Neighborhood Map",
			"dates": "2015",
			"description": "You will develop a single-page application featuring a map of your neighborhood or a neighborhood you would like to visit. You will then add additional functionality to this application, including: map markers to identify popular locations or places you’d like to visit, a search function to easily discover these locations, and a listview to support simple browsing of all locations. You will then research and implement third-party APIs that provide additional information about each of these locations (such as StreetView images, Wikipedia articles, Yelp reviews, etc).",
			"images": [
				""
			]
		},

		{
			"title": "Feed Reader Testing",
			"dates": "2015",
			"description": "In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included Jasmine and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.",
			"images": [
				""
			]
		},

		{
			"title": "Alpha Blog Application",
			"dates": "2016",
			"description": "",
			"images": [
				""
			]
		},

		{
			"title": "Recipes Chef Application",
			"dates": "2016",
			"description": "",
			"images": [
				""
			]
		},{
			"title": "Finance Tracker Application",
			"dates": "2016",
			"description": "",
			"images": [
				""
			]
			
		},

		{
			"title": "Saas Application",
			"dates": "2016",
			"description": "",
			"images": [
				""
			]
		}

	]
}


var education = {

	"schools": [
		{
			"name": "Technology College , Mansourah",
			"years": "May-2010",
			"city": "Mansourah, Egypt",
			"degree": "Doctorate",
			"major": "Institute of Technical Trading & Business."
		},
		{
			"name": "AmidEast, Mansourah",
			"years": "2014-2015",
			"city": "Mansourah, Egypt",
			"degree": "",
			"major": "English Language"
		}
	],

	"onlineCourse": [
		
		{
			"title": "HTML/CSS",
			"school": "Codecademy",
			"dates": 2015,
			"urls" : "http://wwww.codecademy.com"
	
		},{
			"title": "JavaScript",
			"school": "Codecademy",
			"dates": 2015,
			"urls" : "http://wwww.codecademy.com"
	
		},{
			"title": "php",
			"school": "Codecademy",
			"dates": 2015,
			"urls" : "http://wwww.codecademy.com"
	
		},{
			"title": "JavaScript Syntax",
			"school": "Codecademy",
			"dates": 2015,
			"urls" : "http://wwww.codecademy.com"
	
		},{
			"title": "The Startup's Guide to Web Development with Ruby On Rails",
			"school": "Udemy",
			"dates": 2015,
			"urls" : "http://wwww.udemy.com"

		},{
			"title": "The Professional Ruby on Rails Developer",
			"school": "Udemy",
			"dates": 2016,
			"urls" : "http://wwww.udemy.com"
	
		},{
			"title": " The Complete Ruby on Rails Developer Course",
			"school": "Udemy",
			"dates": 2016,
			"urls" : "http://wwww.udemy.com"
		}

	]
} 

// End of variables section. 


// The header section.


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);

var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("#",bio.contacts.twitterURL);
var formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin).replace("#",bio.contacts.linkedinURL);
var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#",bio.contacts.githubURL);
var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);


$("#header").prepend(formattedImage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$('#header').append();


$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedlinkedin);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);

// Displaying Skills at a Glance

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills.join(" "));
    $("#skills").addClass(" text-default").append(formattedSkill);
}



// Displaying Work Experience
function displayWork() {

	for (job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    formattedworkTitle = formattedworkEmployer + formattedworkTitle;
    $(".work-entry:last").append(formattedworkTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);

    }
}

displayWork();

// End of Work Experience section

projects.display = function() {
  for (project in projects.projects) {

   $("#projects").append(HTMLprojectStart);

   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
   $(".project-entry:last").append(formattedTitle);

   var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
   $(".project-entry:last").append(formattedDates);

   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
   $(".project-entry:last").append(formattedDescription);

   if (projects.projects[project].images.length > 0) {
   	for (image in projects.projects[project].images) {
   		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
   		$(".project-entry:last").append(formattedImage);
   	}
   }

  }

}

projects.display();


// End of Projects section

function displayEducation () {
  
   for (school in education.schools) {
	   $("#education").append(HTMLschoolStart);
	  
	   var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	   var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	   var formattedschoolDegree = formattedschoolName + formattedschoolDegree; 
	   $(".education-entry:last").append(formattedschoolDegree);
	  
	   var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
	   $(".education-entry:last").append(formattedschoolDates);
	  
	   var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
	   $(".education-entry:last").append(formattedschoolLocation);

	   var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	   $(".education-entry:last").append(formattedschoolMajor);

	}

  }

displayEducation(); 


function displayonlinecourses() { 

  $(".education-entry:last").append(HTMLonlineClasses);
  for (course in education.onlineCourse) {

	  var formattedonlineTitle =  HTMLonlineTitle.replace("%data%", education.onlineCourse[course].title);
	  $(".education-entry:last").append(formattedonlineTitle);
	  
	  var formattedonlineDates =  HTMLonlineDates.replace("%data%", education.onlineCourse[course].dates);
	  $(".education-entry:last").append(formattedonlineDates);

	  var formattedonlineSchool =  HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
	  $(".education-entry:last").append(formattedonlineSchool);
	   
	  var formattedonlineUrl =  HTMLonlineURL.replace("%data%", education.onlineCourse[course].urls);
	  $(".education-entry:last").append(formattedonlineUrl);

  }	
			 
}

displayonlinecourses();



// Other sections



$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});

function locationizer(work_obj) {
   var locationArray = [];

   for (job in work_obj.jobs) {
   	var newLocation = work_obj.jobs[job].location;
   	locationArray.push(newLocation);
   }

   return locationArray;

}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase;
	name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];

}


// footer section

$("#footerContacts").append(formattedmobile);
$("#footerContacts").append(formattedemail);
$('#footerContacts').append(internationalizeButton);
$("#footerContacts").append(formattedgithub);
$("#footerContacts").append(formattedlinkedin);

// map section

//$("#mapDiv").append(googleMap);
