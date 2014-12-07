// TODO: Encapsulate each 'render' bit into a func, and pass
// in the relevant data to these (elem in DOM to insert into, and the JSON data)

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

// Define education
var education = {
  "schools": [
    {
      "name": "IT-University of Copenhagen",
      "location": "Copenhagen, Denmark",
      "dates": "2009-2012",
      "degree": "BSc",
      "url": "http://www.itu.dk",
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

// Define work employments
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

// Define projects
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

// Add contact info (top)
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
var skillsList = $("#skills");
bio.skills.forEach(function(skill) {
  var formattedSkill = HTMLskills.replace(replacementTag, skill);
  skillsList.append(formattedSkill);
});

// Loop over each distinctive work experience, format it and append it to the
// list of work experiences
var workExperienceList = $("#workExperience");
work.jobs.forEach(function(job) {

  // NOTE: In the project specification it is suggested that one uses the
  // syntax $(".work-entry:last").append(...); to add content to the work entry
  // container. Another option is to simply wrap the work-entry HTML template
  // in a jQuery selector and add content directly to it instead. This should
  // yeild better performance, since we don't keep selecting the 'last' elem in
  // the work-entry div, but instead just adding content to the wrapped work-
  // entry template selector.

  // Create a new work entry from the work-entry HTML template
  var workEntry = $(HTMLworkStart);

  // Format the job informations
  var formattedWorkEmployer =
    HTMLworkEmployer.replace(replacementTag, job.employer);
  var formattedWorkTitle =
    HTMLworkTitle.replace(replacementTag, job.title);
  var formattedWorkDates =
    HTMLworkDates.replace(replacementTag, job.dates);
  var formattedWorkLocation =
    HTMLworkLocation.replace(replacementTag, job.location);
  var formattedWorkDescription =
    HTMLworkDescription.replace(replacementTag, job.description);

  // Append the info to the entry elem
  workEntry.append(formattedWorkEmployer + formattedWorkTitle);
  workEntry.append(formattedWorkDates);
  workEntry.append(formattedWorkLocation);
  workEntry.append(formattedWorkDescription);

  // Append the entry elem to the work experience list
  workEntry.appendTo(workExperienceList);
});

// Loop over each distinctive project, format it and append it to the
// list of projects
var projectList = $("#projects");
projects.projects.forEach(function(project) {
  // Create a new project entry from the project-entry HTML template
  var projectEntry = $(HTMLprojectStart);

  // Format the project informations
  var formattedProjectTitle =
    HTMLprojectTitle.replace(replacementTag, project.title);
  var formattedProjectDates =
    HTMLprojectDates.replace(replacementTag, project.dates);
  var formattedProjectDescription =
    HTMLprojectDescription.replace(replacementTag, project.description);

  var formattedProjectImages = "";
  project.images.forEach(function(image) {
      // Format the specified image
      var formattedProjectImage =
        HTMLprojectImage.replace(replacementTag, image);

      // Append the formatted image to the list of formatted images
      formattedProjectImages = formattedProjectImages + formattedProjectImage;
  });

  // Append the info to the entry elem
  projectEntry.append(formattedProjectTitle);
  projectEntry.append(formattedProjectDates);
  projectEntry.append(formattedProjectDescription);
  projectEntry.append(formattedProjectImages);

  // Append the entry elem to the projects list
  projectEntry.appendTo(projectList);
});

// Loop over each distinctive education (school and online course), format it
// and append it to the list of educations
var educationList = $("#education");

education.schools.forEach(function(school) {
  // Create a new school entry from the school-entry HTML template
  var schoolEntry = $(HTMLschoolStart);

  // Format the school informations
  var formattedSchoolName =
    HTMLschoolName.replace("#", school.url)
                  .replace(replacementTag, school.name);
  var formattedSchoolDegree =
    HTMLschoolDegree.replace(replacementTag, school.degree);
  var formattedSchoolDates =
    HTMLschoolDates.replace(replacementTag, school.dates);
  var formattedSchoolLocation =
    HTMLschoolLocation.replace(replacementTag, school.location);

  var formattedSchoolMajors = "";
  school.majors.forEach(function(major) {
      // Format the specified major
      var formattedSchoolMajor =
        HTMLschoolMajor.replace(replacementTag, major);

      // Append the formatted major to the list of formatted majors
      formattedSchoolMajors = formattedSchoolMajors + formattedSchoolMajor;
  });

  // Append the info to the entry elem
  schoolEntry.append(formattedSchoolName + formattedSchoolDegree);
  schoolEntry.append(formattedSchoolDates);
  schoolEntry.append(formattedSchoolLocation);
  schoolEntry.append(formattedSchoolMajors);

  // Append the entry elem to the education list
  schoolEntry.appendTo(educationList);
});

// Check if we should add any online courses
if (education.onlineCourses.length > 0) {
    // If so, append the online courses heading before appending any courses
    educationList.append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onlineCourse) {
      var onlineCourseEntry = $(HTMLschoolStart);

      // Format the online course informations
      var formattedOnlineTitle =
        HTMLonlineTitle.replace("#", onlineCourse.url)
                       .replace(replacementTag, onlineCourse.title);
      var formattedOnlineSchool =
        HTMLonlineSchool.replace(replacementTag, onlineCourse.school);
      var formattedOnlineDates =
        HTMLonlineDates.replace(replacementTag, onlineCourse.dates);
      var formattedOnlineUrl =
        HTMLonlineURL.replace("#", onlineCourse.url)
                     .replace(replacementTag, onlineCourse.url);

      // Append the info to the entry elem
      onlineCourseEntry.append(formattedOnlineTitle + formattedOnlineSchool);
      onlineCourseEntry.append(formattedOnlineDates);
      onlineCourseEntry.append(formattedOnlineUrl);

      // Append the entry elem to the education list
      onlineCourseEntry.appendTo(educationList);
    });
}

// Add Google maps
$("#mapDiv").append(googleMap);

// Add contact info (footer)
var footerContacts = $("#footerContacts");

footerContacts.append(formattedMobile);
footerContacts.append(formattedEmail);
footerContacts.append(formattedTwitter);
footerContacts.append(formattedGitHub);
footerContacts.append(formattedBlog);
footerContacts.append(formattedLocation);
