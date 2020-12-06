
/* Change this file to get your Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dev Raj",
  title: "Hi all, I'm Dev",
  subTitle: emoji("A passionate FullStack Developer 🚀"),
  resumeLink: "https://drive.google.com/file/d/14A_X7krepXzoTsqqcjStd60aYQCNxzAx/view?usp=drivesdk"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/devraj4522",
  linkedin: "https://www.linkedin.com/in/dev-raj-s-80871b12b/",
  gmail: "rehansingh.4522@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100010745441573",
  instgram: "https://www.instagram.com/singh.devrj/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive WordPress Development with full speed and eligant style"),
    emoji("⚡ Integration of third party services such as Payment Interfaces/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  software skills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SEO",
      fontAwesomeClassname: "fab fa-search"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Intergerated Payment",
      fontAwesomeClassname: "fab fa-credit-card"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Maulan Abul Kalam University of Technology",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor in Computer Science Engineering",
      duration: "September 2019 - Present",
      desc: "Recent grade 9.4 CGPA",
      descBullets: [
        "Learning variou stacks including programming and Communication system",
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
        "Software Engeneering with major focus in fundmental programming Paradigm"
      ]
    },
    {
      schoolName: "Shivam Residential Public School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Matric and Intermediate",
      duration: "September 2016 - April 2018",
      desc: "",
      descBullets: [
        "9.6 CGPA in Class 10th and 89% in Intermediate",
        "Incorporated to school events to inprove communication, leadership skill and team management",
        "School Briefing"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "WordPress Development",
      company: "Freelancing",
      companylogo: require("./assets/images/wordpress.png"),
      date: "June 2018 – Present",
      desc: "Helping startups to create an actionable, beautiful website with lightweight themes having high loading speed. Created SEO friendly websites that ranks faster in Google.",
      descBullets: [
        "Faster website with better caching duration",
        "Easy to operate and taking action"
      ]
    },
    {
      role: "Owner and Admin",
      company: "The Yuvas",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2019 – Present",
      desc: "Created my own startup that helps students to prepare for competitive exams and look for the better approach and material for these exams."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get GitHub key look at the readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Devraj4522", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "MEDIA COVERAGE",
  subtitle: "SOME STARTUPS AND COMPANIES WHERE I GOT FEATURED",
  projects: [
    {
      image: require("./assets/images/databox-default.png"),
      link: "#"
    },
    {
      image: require("./assets/images/Speech Blubs.png"),
      link: "#"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievement cards: [
    {
      title: "Featured in JustjobNG",
      subtitle: "Helped resume building specialist in creating an actionable resume that stand out.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "WordPress Web App Development",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      URL: "https://theyuvas.com/why-learn-python-programming/",
      title: "Is Python Worth Learning for Beginners",
      description: "How much time does it take to learn python? The best way to learn Python and start a profitable career in Python."
    },
    {
      URL: "https://theyuvas.com/programming-websites/amp/",
      title: "10 Programming Websites that Every Serious Programmer Should Follow",
      description: "List of top 10 websites full building project and enhancing learning in Python and other programming languages"
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For WordPress Development",
      subtitle: "#",
      slides_url: "#",
      event_url: "#"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["#"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9122604819",
  email_address: "rehansingh.4522@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName: "Dev_raj4522"//Replace "twitter" with your Twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
