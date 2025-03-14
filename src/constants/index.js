import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a full-stack developer skilled in React, Node.js, Express, and MongoDB, with experience building projects like a college resource hub, eBook platform, and travel website. Proficient in Python, Java, and DSA, I focus on creating scalable, user-friendly solutions with optimized performance.  `;

export const ABOUT_TEXT = `I am a passionate full-stack developer with a strong focus on building dynamic and efficient web applications. With hands-on experience in React.js, Node.js, Express.js, and MongoDB, I have developed multiple projects, including a college resource hub, an eBook platform, and a travel website. My expertise spans front-end technologies like React (Vite), Tailwind CSS, and EJS, as well as back-end technologies such as MongoDB, Firebase, and RESTful APIs. Additionally, I have a solid foundation in Python and Java, along with Data Structures and Algorithms (DSA), which helps me write optimized and scalable code. I strive to create seamless, user-friendly experiences while ensuring performance and efficiency in every project I build. `;

export const TAG_LINE = "Unleashing Innovation and Creativity! Welcome to Spark 2K25, the flagship tech event by Computer Science Department of Annasaheb Dange College of Engineering and Technology, Ashta. Join us in this celebration of knowledge and innovation!";

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Co-leader Web Developer",
    company: "GDC, ADCET.",
    description: `I led a team in creating a real-world project, enhancing their skills on the MERN stack, and implemented RESTful APIs integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Express.js", "mongoDB"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "NoteCafe",
    image: project1,
    description:
      "A fully functional e-book website for students, where they can access the notes or study material they need.",
    technologies: ["Tailwind CSS", "Express.JS", "React", "Node.js", "MongoDB","Firebase"],
  },
  {
    title: "WanderLust Travel",
    image: project2,
    description:
      "An application for travelers where they can check hotels, book them, and view a list of available hotels.",
    technologies: ["Ejs", "Express.JS", "Node.JS", "MongoDB"],
  },
  {
    title: "Snake Game with Hand Tracking",
    image: project3,
    description:
      "This project is an interactive Snake Game using Python, OpenCV, and CVZone, where real-time hand tracking controls the snake for a fun, gesture-based experience.",
    technologies: ["Python", "OpenCV", "SVG"],
  },
  {
    title: "Ai Calculator",
    image: project4,
    description:
      "This project features a ReactJS frontend for an interactive interface, a Python backend for efficient AI-powered calculations, and advanced AI integration for enhanced accuracy and functionality.",
    technologies: ["React.JS", "Python", "AI", "Express", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Sambhaji Chowk, Islampur, Maharashtra, India",
  phoneNo: "+91 7499 321 428 ",
  email: "shreyaswagire07sw@mail.com",
};

export const EVENT_DATA = [
  {
    id: 1,
    title: "Apti-Master",
    description: "Experience the future of aptitude testing with challenging rounds, competitions, and innovative problem-solving. Join us for an exciting journey into the world of logical reasoning.",
    type: "technical"
  },
  {
    id: 2,
    title: "Mini Hackathon",
    description: "Dive into the world of coding with challenging hackathons, competitions, and workshops on the latest technologies in software development.",
    type: "technical"
  },
  {
    id: 3,
    title: "Group Discussion",
    description: "Showcase your communication skills and analytical thinking through engaging group discussions on contemporary topics.",
    type: "non-technical"
  },
  {
    id: 4,
    title: "Innoprotex",
    description: "Present your innovative prototype ideas that address real-world challenges in this exciting competition for aspiring innovators.",
    type: "technical"
  },
  {
    id: 5,
    title: "BGMI",
    description: "Experience the thrill of competitive mobile gaming in this action-packed BGMI tournament.",
    type: "non-technical"
  },
  {
    id: 6,
    title: "Box Cricket",
    description: "Experience cricket in a unique format with special rules and exciting gameplay in a compact arena.",
    type: "non-technical"
  },
  {
    id: 7,
    title: "Treasure Hunt",
    description: "An exciting treasure hunt that combines problem-solving, teamwork, and adventure across the campus.",
    type: "non-technical"
  }
];

export const EVENT_DETAILS = {
  1: {
    title: "Apti-Master",
    subtitle: "Test Your Analytical Skills",
    description: "The Apti-Master competition is designed to test students' aptitude, logical reasoning, and problem-solving skills through challenging and engaging rounds.",
    why: [
      "Enhance your aptitude and logical reasoning",
      "Test your problem-solving abilities",
      "Compete with the best minds",
      "Win exciting cash prizes"
    ],
    highlights: "Two challenging rounds: Online (Laptops) and Offline (Pen & Paper). Top performers from Round 1 qualify for Round 2.",
    events: [
      {
        title: "Round 1",
        description: "Online aptitude test on laptops"
      },
      {
        title: "Round 2",
        description: "Offline written test for qualified participants"
      }
    ],
    coordinator: {
      name: "Prathmesh Patil",
      contact: "+91 9834059495"
    },
    cocoordinator: {
      name: "Rutuja Patil",
      contact: "+91 8010138189"
    },
    fee: "₹50 per participant",
    type: "technical",
    registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
  },
  2: {
    title: "Mini Hackathon",
    subtitle: "Code, Create, Innovate",
    description: "A dynamic event that challenges participants to ideate, develop, and present innovative tech solutions. This competition is designed to encourage creativity, problem-solving, and hands-on development.",
    why: [
      "Showcase your development skills",
      "Work on real-world problems",
      "Network with fellow developers",
      "Win attractive cash prizes"
    ],
    highlights: "Multiple domains including Health, Education, AI/ML, IoT, and more. Two rounds: Online Abstract Submission and Offline Demonstration.",
    events: [
      {
        title: "Round 1: Abstract Submission",
        description: "Submit project idea and problem statement"
      },
      {
        title: "Round 2: Project Demo",
        description: "Present working prototype to judges"
      }
    ],
    coordinator: {
      name: "Zahoorahmed Sayyad",
      contact: "+91 877354046"
    },
    cocoordinator: {
      name: "Akshata Mohite",
      contact: "+91 9892249297"
    },
    fee: "₹200 per team",
    type: "technical",
    registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
  },
  3: {
    title: "Group Discussion",
    subtitle: "Voice Your Thoughts",
    description: "An engaging platform where participants showcase their communication, analytical thinking, and debating skills through structured discussions on contemporary topics.",
    why: [
      "Improve communication skills",
      "Develop critical thinking",
      "Learn team dynamics",
      "Enhance leadership qualities"
    ],
    highlights: "Groups of 8-10 members, Topics given on spot, English medium discussion, Professional evaluation criteria.",
    events: [
      {
        title: "Preparation Time",
        description: "2 minutes for topic analysis"
      },
      {
        title: "Discussion Round",
        description: "10 minutes group discussion"
      }
    ],
    coordinator: {
      name: "Shivam Gokhale",
      contact: "+91 9921718840"
    },
    cocoordinator: {
      name: "Rohini Maske",
      contact: "+91 9529647141"
    },
    fee: "₹50 per participant",
    type: "non-technical",
    registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
  },
  4: {
    title: "Innoprotex",
    subtitle: "Design Your Innovation",
    description: "An Innovative Idea Prototype Design Competition for SY Class students to present creative and feasible prototype ideas that address real-world challenges.",
    why: [
      "Present innovative solutions",
      "Develop prototype design skills",
      "Get expert feedback",
      "Opportunity for project funding"
    ],
    highlights: "8-10 minutes presentation time, Focus on real-world problems, Opportunity to demonstrate live prototypes.",
    events: [
      {
        title: "Idea Presentation",
        description: "Present problem statement and solution"
      },
      {
        title: "Prototype Demo",
        description: "Showcase working prototype if available"
      }
    ],
    coordinator: {
      name: "Contact CESA Team",
      contact: "NA"
    },
    fee: "Free for ADCET Students",
    type: "technical",
    registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
  },
  5: {
    title: "BGMI",
    subtitle: "Battle Grounds Mobile India",
    description: "Experience the thrill of competitive mobile gaming in this action-packed BGMI tournament.",
    why: [
      "Compete with skilled players",
      "Test your gaming strategies",
      "Win exciting prizes",
      "Build team coordination"
    ],
    highlights: "Team-based competition, Multiple rounds, Professional tournament format.",
    events: [
      {
        title: "Qualification Rounds",
        description: "Initial team battles"
      },
      {
        title: "Finals",
        description: "Top teams battle for victory"
      }
    ],
    coordinator: {
      name: "Contact CESA Team",
      contact: "NA"
    },
    fee: "Contact coordinators for details",
    type: "non-technical",
    registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
  },
  6: {
    title: "Box Cricket",
    subtitle: "Cricket with a Twist",
    description: "Experience cricket in a unique format with special rules and exciting gameplay in a compact arena.",
    why: [
      "Play innovative cricket format",
      "Build team spirit",
      "Enjoy competitive sports",
      "Win exciting prizes"
    ],
    highlights: "Special rules, Limited overs format, Exciting prizes for winners.",
    events: [
      {
        title: "League Matches",
        description: "Initial team matches"
      },
      {
        title: "Knockout Rounds",
        description: "Quarter-finals onwards"
      }
    ],
    coordinator: {
      name: "Contact CESA Team",
      contact: "NA"
    },
    fee: "Contact coordinators for details",
    type: "non-technical",
    registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
  },
  7: {
    title: "Treasure Hunt",
    subtitle: "Hunt for Glory",
    description: "An exciting treasure hunt that combines problem-solving, teamwork, and adventure across the campus.",
    why: [
      "Test your problem-solving skills",
      "Explore the campus",
      "Work in teams",
      "Win exciting prizes"
    ],
    highlights: "Multiple challenging clues, Team-based competition, Time-bound rounds.",
    events: [
      {
        title: "Clue Solving",
        description: "Decode hints and locations"
      },
      {
        title: "Final Hunt",
        description: "Race to the treasure"
      }
    ],
    coordinator: {
      name: "Contact CESA Team",
      contact: "NA"
    },
    fee: "Contact coordinators for details",
    type: "non-technical",
    registrationLink: "https://forms.gle/f9UAeXdJoGGmR9p66"
  }
};
