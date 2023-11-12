/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Reynaldo's Portfolio",
  description:
    "I'm who I am, a person who enjoys creating solutions, coding and providing support. A person who loves to learn every day and use the knowledge gained to create and impact the world around me.",
  og: {
    title: "Reynaldo Cuenca Campos Portfolio",
    type: "website",
    url: "http://reynaldocc.dev/",
  },
};

//Home Page
const greeting = {
  title: "Reynaldo Cuenca Campos",
  logo_name: "Reynaldo Cuenca Campos",
  nickname: "masquer_dev",
  subTitle:
    "I'm who I am, a person who enjoys creating solutions, coding and providing support. A person who loves to learn every day and use the knowledge gained to create and impact the world around me.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository:
    "https://github.com/ashutosh1919/ReynaldoPortfolio.github.io",
  githubProfile: "https://github.com/ReynaldoCC",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // (github: "https://github.com/ReynaldoCC"),
  // (linkedin: "https://www.linkedin.com/in/reynaldo-cuenca-campos/"),
  // (gmail: "reyanldo86.onwork@gmail.com"),
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ReynaldoCC",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/reynaldo-cuenca-campos/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:reynaldo86.onwork@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Credly",
    link: "https://www.credly.com/users/reynaldo-cuenca-campos/badges",
    fontAwesomeIcon: "fa-cuttlefish", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#ff6a00", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Telegram",
    link: "https://t.me/Bichengo",
    fontAwesomeIcon: "fa-telegram-plane", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#3390ec", // Reference https://simpleicons.org/?q=linkedin
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website using Angular with other frontend technologies",
        "⚡ Building web services, Rest API, GraphQL API",
        "⚡ Creating sustainable backend web applications using mostly Python technologies",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          imageSrc: "typescript.png",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#bd002e",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "UIKit",
          fontAwesomeClassname: "simple-icons:uikit",
          style: {
            color: "#2287e8",
          },
        },
        {
          skillName: "Django",
          imageSrc: "django.png",
        },
        {
          skillName: "D R F",
          imageSrc: "drf.png",
        },
        {
          skillName: "Graphene",
          imageSrc: "graphene.png",
        },
        {
          skillName: "Celery",
          imageSrc: "celery.png",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS platform",
        "⚡ Experience Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying Python apps on Heroku and others platforms",
        "⚡ Experience setting up docker based orchestration",
        "⚡ Setting up CI/CD environment using Jenkins",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GNU/Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#314d5e",
          },
        },
        {
          skillName: "Heroku",
          imageSrc: "heroku.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/ReynaldoCC/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/badbug1011",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/reynaldocc",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/masquer_dev",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@masquer_dev",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/reynaldocc",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Universidad Tecnológica de La Habana 'José Antonio Echeverría' (CUJAE)",
      subtitle: "Informatics Engineering",
      logo_path: "cujae_logo.png",
      alt_name: "CUJAE",
      duration: "2012 - 2018",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done a postgraduate course on Business intelligence and Data modeling",
      ],
      website_link: "https://cujae.edu.cu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "SQL Práctico",
      subtitle: "- Raul Montesinos",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c803d215-4334-439f-bca0-022a11809207/",
      alt_name: "Numpy Cursos",
      color_code: "#00000099",
    },
    {
      title: "SQL Práctico Avanzado",
      subtitle: "- Adrian Javier Tagúico",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-0a6c946d-f958-4e0e-bd1d-73cc967a29cd/",
      alt_name: "",
      color_code: "#00000099",
    },
    {
      title: "C# de Cero a Avanzado",
      subtitle: "- Felipe Gavilán",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-5766f203-b562-41ff-88d8-1b40aaa5de10/",
      alt_name: "",
      color_code: "#00000099",
    },
    {
      title: "English",
      subtitle: "- EFSet",
      logo_path: "efset-logo.svg",
      certificate_link: "https://www.efset.org/cert/LrJ3i4",
      alt_name: "EF SET",
      color_code: "#4285F499",
    },
    {
      title: "Test Automation Foundation",
      subtitle: "- Ozan IIhan",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1x7sXtsLGtAqadOVO3lL4X-Bkfi95jJLC/view?usp=sharing",
      alt_name: "Software Testing House",
      color_code: "#00000099",
    },
    {
      title: "Blockchain de la A a la Z",
      subtitle: "- Super Datascience Team",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-853768cd-4be7-456d-99e0-ba9281f1094a/",
      alt_name: "Super Datascience Team",
      color_code: "#00000099",
    },
    {
      title: "R Studio: Empieza desde Cero",
      subtitle: "- Raul Montesinos",
      logo_path: "udemy-logo.svg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-52a35060-5956-4c2a-8cb5-d1e9e0a83b8c/",
      alt_name: "DataBooster Academy",
      color_code: "#00000099",
    },
    {
      title: "Blockchain",
      subtitle: "Google Developer launchpad",
      logo_path: "google-developer-launchpad-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1d03b0jcGA8EMmFFvnUhO7IJvlOMwj3UG/view?usp=sharing",
      alt_name: "Google Developer launchpad",
      color_code: "#e78b8b99",
    },
    {
      title: "Python 101 for Data Science",
      subtitle: "Cognitive Class AI",
      logo_path: "cognclass_logo.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/84d2024352b142509701eb56ca7a4c86",
      alt_name: "IBM",
      color_code: "#9eededad",
    },
    {
      title: "Solidity Certification Course",
      subtitle: "Google Developer launchpad",
      logo_path: "google-developer-launchpad-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1TTuKEHJNNLlIsBbQNUeMBD-Emp0mKJ65/view?usp=drive_link",
      alt_name: "Google Developer launchpad",
      color_code: "#e78b8b99",
    },
    {
      title: "Python (Basic) Skills",
      subtitle: "HackerRank",
      logo_path: "HackerRank.png",
      certificate_link: "https://www.hackerrank.com/certificates/dcd66569fe09",
      alt_name: "Hacker Rank",
      color_code: "#0d7eb990",
    },
    {
      title:
        "Blockchain Scalability and its Foundations in Distributed Systems",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/F2ZMWRFY29MR",
      alt_name: "University of Sidney",
      color_code: "#b5d57490",
    },
    {
      title: "Python Data Structures",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/CXXPBGAQFBVF",
      alt_name: "University of Michigan",
      color_code: "#b5d57490",
    },
    {
      title: "Introduction to Blockchain for Global Commerce",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BCK425HMY22S",
      alt_name: "INSEAD",
      color_code: "#b5d57490",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "I have worked in some startUps mainly as Full stack web developer with a heavy backend position. I have also worked with some well established companies mostly covering similar roles. I love supporting my teammates and also planning as better as possible the work flow because of that I performed couple of times as a Team leader.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Web Developer",
          company: "FPT Software",
          company_url: "https://legatohealthtech.com/",
          logo_path: "FPT_Software.png",
          duration: "Jul 2022 - Jul 2023",
          location: "Da Nang, VietNam",
          description:
            "I worked in a web system to follow up leads and residents of communities and properties, to improve the experience of those management users and the interaction between our customer and the final users of the platform. The web system include many integration with others third party software making easier for final user get familiar with the system.",
          color: "#0879bf",
        },
        {
          title: "Team Leader",
          company: "DPV La Habana",
          company_url: "https://www.facebook.com/DPVLaHabana/?locale=es_LA",
          logo_path: "dpv_la_habana.jpg",
          duration: "Aug 2018 - Jun 2022",
          location: "Havana, Cuba",
          description:
            "I lead a small developers team to create a web system to computerize many areas of the company. The Suit was thought to be integrated with others software used in the company and support to others made manually processes, in order to facility the labor of many people and get more accurate information about the company processes flow.",
          color: "#9b1578",
        },
        {
          title: "Full Stack Web Developer",
          company: "Bidaiondo",
          company_url: "https://www.bidaiondo.com/",
          logo_path: "bidaiondo_logo.png",
          duration: "Mar 2019 - Dec 2021",
          location: "Havana, Cuba",
          description:
            "Bidaiondo is Software developer company specialized in software for tourism market from Spain, with a branch in Havana, Cuba, I coded features for some tourism website and management platforms focussed on the company business model.",
          color: "black",
        },
        {
          title: "Backend Lead Developer",
          company: "NavegaBit",
          company_url:
            "https://www.facebook.com/profile.php?id=100081589205035",
          logo_path: "navegabit.png",
          duration: "Jan 2021 - May 2021",
          location: "Havana, Cuba",
          description:
            "NavegaBit is an amazing Start UP from Cuba that develop software for Cuban and foreigner Pymes, they given to me the opportunity to lead a small backend developers team to develop a GraphQL API consumed by a web and a mobile application to manage loans, credits and payment ways of a platform with a virtual currency.",
          color: "#fc1f20",
        },
        {
          title: "Full Stack Web Developer",
          company: "ByT",
          company_url: "https://www.byt.bz/",
          logo_path: "byt_logo.jpeg",
          duration: "Jul 2018 - Dec 2019",
          location: "Havana, Cuba",
          description:
            "ByT is Warm family in Start Up form from Cuba. I developed a web system to manage, computerize and analyze the data from consultations, records, and medical follow-ups, as well as patient data. This Software include but not limited to examination, results, patients notification, and Integration with third-party systems from companies in the sector",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My personal projects makes use of many technology tools. Most of them are practices with technologies, practices of courses, and some funny tools I've created to make easier any kind of process or task, and also have fun with friends.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    /*{
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my.png",
    description:
      "I am available on some social media. You can message me, I will reply within 24 hours. I can help you with Python, Django and other related tech-stacks even in Opensource Development.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Sentosa riverside, đường Dũng Sĩ Điện Ngọc, Điện Ngọc, Điện Bàn, Quảng Nam - 560000",
    locality: "Điện Bàn",
    country: "VN",
    region: "Quảng Nam",
    postalCode: "385520",
    streetAddress: "đường Dũng Sĩ Điện Ngọc",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/5KeJnM2wi32aBkat5",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (786) 374 2522",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
