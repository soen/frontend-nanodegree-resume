// Define replacement tag
var replacementTag = "%data%";

// Define biography
var bio = {
  "name": "Søren Engel",
  "role": "Developer",
  "contacts": {
    "mobile": "(+45) 3136 3054",
    "email": "soren.engel@gmail.com",
    "twitter": "@soren_engel",
    "github": "https://github.com/soen",
    "blog": "http://soen.ghost.io",
    "location": "Copenhagen, Denmark"
  },
  "bioPic": "images/fry.jpg",
  "welcomeMessage": "Welcome to the world of tomorrow",
  "skills": [ "HTML5", "CSS3", "JavaScript", "C#" ]
};

var education = {
  "schools": [
    {
      "name": "IT-University of Copenhagen",
      "location": "Copenhagen, Denmark",
      "city": "Copenhagen",
      "degree": "BSc",
      "majors": ["Software Development"]
    }
  ],
  "onlineCourses" : [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "2014",
      "url": "TODO"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "2014",
      "url": "TODO"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Nexcom A/S",
      "title": "Software Analyst",
      "location": "Kgs. Lyngby, Denmark",
      "dates": "2009-2014",
      "description": "TODO"
    },
    {
      "employer": "Netcompany A/S",
      "title": "Developer",
      "location": "Copenhagen, Denmark",
      "dates": "2014",
      "description": "TODO"
    }
  ]
};

var projects = {
  "projects": [
    {
      "title": "Mockup Website",
      "dates": "2014",
      "description": "TODO",
      "images": [
        "imagesUrl1a", "imagesUrl2a", "imagesUrl3a"
      ]
    },
    {
      "title": "Resume",
      "dates": "2014",
      "description": "TODO",
      "images": [
        "imagesUrl1b", "imagesUrl2b", "imagesUrl3b"
      ]
    }
  ]
};

// TODO: Complete the code below in order to render the resume
// ------------------------------------------------------------

// Select header elem
var header = $("#header");

// Add name and role
var formattedName = HTMLheaderName.replace(replacementTag, bio.name);
var formattedRole = HTMLheaderRole.replace(replacementTag, bio.role);

header.prepend(formattedRole);
header.prepend(formattedName);

// Add contact info
var topContacts = $("#topContacts");

var formattedMobile =
  HTMLmobile.replace(replacementTag, bio.contacts.mobile);
var formattedEmail =
  HTMLemail.replace(replacementTag, bio.contacts.email);
var formattedTwitter =
  HTMLtwitter.replace(replacementTag, bio.contacts.twitter);
var formattedGitHub =
  HTMLgithub.replace(replacementTag, bio.contacts.github);
var formattedBlog =
  HTMLblog.replace(replacementTag, bio.contacts.blog);
var formattedLocation =
  HTMLlocation.replace(replacementTag, bio.contacts.location);

topContacts.append(formattedMobile);
topContacts.append(formattedEmail);
topContacts.append(formattedTwitter);
topContacts.append(formattedGitHub);
topContacts.append(formattedBlog);
topContacts.append(formattedLocation);

// Add profile picture
var formattedPicture =
  HTMLbioPic.replace(replacementTag, bio.bioPic);

header.append(formattedPicture);

// Add welcome msg
var formattedWelcomeMsg =
  HTMLWelcomeMsg.replace(replacementTag, bio.welcomeMessage);

header.append(formattedWelcomeMsg);

// Add skills list
header.append(HTMLskillsStart);

// Loop over each distinctive skill, format it and append it to the list of skills
var skills = $("#skills");
bio.skills.forEach(function(skill) {
  var formattedSkill = HTMLskills.replace(replacementTag, skill);
  skills.append(formattedSkill);
});
