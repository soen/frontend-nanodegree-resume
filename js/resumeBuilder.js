// ============================================================================
// NOTE: In the project specification it is suggested that one uses the
// syntax $(".work-entry:last").append(...); to add content to the work entry
// container. Another option is to simply wrap the work-entry HTML template
// in a jQuery selector and add content directly to it instead. This should
// yeild better performance, since we don't keep selecting the 'last' elem in
// the work-entry div, but instead just adding content to the wrapped work-
// entry template selector.
// ============================================================================

// Define replacement tag
var replacementTag = "%data%";

// Define biography
var bio = {
  name: "Søren Engel",
  role: "Developer",
  contacts: {
    mobile: "(+45) 3136 3054",
    email: "soren.engel@gmail.com",
    twitter: "@soren_engel",
    github: "https://github.com/soen",
    blog: "http://soen.ghost.io",
    location: "Copenhagen, Denmark"
  },
  bioPic: "https://pbs.twimg.com/profile_images/432482930317737985/UcpOzfnf.jpeg",
  welcomeMessage: "Welcome to the world of tomorrow",
  skills: [
    "HTML5", "CSS3", "Sass", "JavaScript", "C#"
  ],
  render: function() {
    var header = $("#header");

    // Add name and role
    var formattedName = HTMLheaderName.replace(replacementTag, bio.name);
    var formattedRole = HTMLheaderRole.replace(replacementTag, bio.role);

    header.prepend(formattedRole);
    header.prepend(formattedName);

    // Add contact info (top and bottom)
    var appendContactInfoTo = function(contacts) {
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

      contacts.append(formattedMobile);
      contacts.append(formattedEmail);
      contacts.append(formattedTwitter);
      contacts.append(formattedGitHub);
      contacts.append(formattedBlog);
      contacts.append(formattedLocation);
    };

    appendContactInfoTo($("#topContacts"));
    appendContactInfoTo($("#footerContacts"));

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

    // Loop over each distinctive skill, format it and
    // append it to the list of skills
    var skillsList = $("#skills");
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace(replacementTag, skill);
      skillsList.append(formattedSkill);
    });
  }
};

// Define education
var education = {
  schools: [
    {
      name: "IT-University of Copenhagen",
      location: "Copenhagen, Denmark",
      dates: "2009-2012",
      degree: "BSc",
      url: "http://www.itu.dk",
      majors: ["Software Development"]
    }
  ],
  onlineCourses : [
    {
      title: "Intro to HTML and CSS",
      school: "Udacity",
      dates: "2014",
      url: "www.udacity.com"
    },
    {
      title: "JavaScript Basics",
      school: "Udacity",
      dates: "2014",
      url: "www.udacity.com"
    }
  ],
  render: function() {
    var educationList = $("#education");

    var getFormattedSchool = function(school) {
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

      return schoolEntry;
    };

    var getFormattedOnlineCourse = function(onlineCourse) {
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

      return onlineCourseEntry;
    };

    // Loop over each distinctive school, format it and
    // append it to the list of educations
    education.schools.forEach(function(school) {
      var formattedSchool = getFormattedSchool(school);
      formattedSchool.appendTo(educationList);
    });

    // Check if we should add any online courses
    if (education.onlineCourses.length > 0) {
      // If so, append the online courses heading before appending any courses
      educationList.append(HTMLonlineClasses);

      // Loop over each distinctive online course, format it and
      // append it to the list of educations
      education.onlineCourses.forEach(function(onlineCourse) {
        var formattedOnlineCourse = getFormattedOnlineCourse(onlineCourse);
        formattedOnlineCourse.appendTo(educationList);
      });
    }
  }
};

// Define work employments
var work = {
  jobs: [
    {
      employer: "Nexcom A/S",
      title: "Software Analyst",
      location: "Kgs. Lyngby, Denmark",
      dates: "2009-2014",
      description: "Just a grunt developer"
    },
    {
      employer: "Netcompany A/S",
      title: "Developer",
      location: "Copenhagen, Denmark",
      dates: "2014",
      description: "30% Back-end and 70% Front-end"
    }
  ],
  render: function() {
    var workExperienceList = $("#workExperience");

    var getFormattedWork = function(job) {
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

      return workEntry;
    };

    // Loop over each distinctive work experience, format it and
    // append it to the list of work experiences
    work.jobs.forEach(function(job) {
      var formattedWork = getFormattedWork(job);
      formattedWork.appendTo(workExperienceList);
    });
  }
};

// Define projects
var projects = {
  projects: [
    {
      title: "Mockup Website",
      dates: "2014",
      description: "This project is simply a mockup website.",
      images: [
        "http://lorempixel.com/300/200/",
        "http://lorempixel.com/300/200/"
      ]
    },
    {
      title: "Resume",
      dates: "2014",
      description: "This project is an interactive resume.",
      images: [
        "http://lorempixel.com/300/200/",
        "http://lorempixel.com/300/200/",
        "http://lorempixel.com/300/200/"
      ]
    }
  ],
  render: function() {
    var projectList = $("#projects");

    var getFormattedProject = function(project) {
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

      return projectEntry;
    };

    // Loop over each distinctive project, format it and append it to the
    // list of projects
    projects.projects.forEach(function(project) {
      var formattedProject = getFormattedProject(project);
      formattedProject.appendTo(projectList);
    });
  }
};

var renderResume = function() {
    // Add Google maps
    $("#mapDiv").append(googleMap);

    // Render resume sections
    projects.render();
    work.render();
    education.render();
    bio.render();
};

// Render the resume
renderResume();
