import discord from '../images/discord.png';
import {GrGraphQl} from 'react-icons/gr';


// Navigation
export const navLinks = [
  {
    name: 'About',
    url: 'about',
  },
  {
    name: 'Projects',
    url: 'projects',
  },
  {
    name: 'Contact',
    url: 'contact',
  },
];


// skills list
export const skills = [ 
  'Context API',
  'React',
  'Redux',
  'Google Firebase',
  'GraphQl',
  'Tailwind CSS',
];

export const projects = [
  {
    id: 1,
    image: discord,
    name: 'Discord Clone',
    descriptions: [
      '  Populated with authentication, Tweets, Tags, Follow, RealTime Notifications',
    ],

    deployed_url: 'https://discord-clone-2znqbwxxm-tomyotwongjai.vercel.app/',
    github_url: 'https://github.com/tomyotwongjai/discord_clone',
    category: ['react', 'tailwind'],
    key_techs: [
      'React',
      'Redux',
      'Tailwind',
      'Firebase Auth',
      'FireStore',
    ],
  },
  {
    id: 2,
    name: 'Github Locator',
    descriptions: [
      "Straightforward github repository locator using Context API & Hooks for state management. I use this to find my favorite github repositories and learn from analyzing source code to better my code reading skills."
    ],

    deployed_url: 'https://gitrepo-finder.vercel.app/',
    github_url: 'https://github.com/tomyotwongjai/github-locator',
    category: ['React', 'Context API', 'Hooks'],
    key_techs: [
      'React',
      'Context API',
      'CSS',
      'React Hooks',
    ],
  },
  {
    id: 3,
    name: 'Weather Application',
    descriptions: [
      'Weather application build with react. Fetching current weather information using openweather API ',
    ],

    deployed_url: 'https://whatweathercity.netlify.app/',
    github_url: 'https://github.com/tomyotwongjai/react-weather-app',
    category: ['previous'],
    key_techs: [
      'React',
      'openweathercit api',
      'react-hook',
      'callback function',
    ],
  },

  {
    id: 4,
    name: 'ECommerce CRUD application',
    descriptions: [
      'This is CRUD application I did for my junior test at Scandiweb. The applcation use react as front end and PHP/Mysqql for databse. The project inculde form validation.',
    ],

    deployed_url: 'https://scandiweb-test-bice.vercel.app',
    github_url: 'https://github.com/tomyotwongjai/scandiweb-test',
    category: ['previous'],
    key_techs: ['React', 'PHP', 'MYSQL'],
  },
  {
    id: 5,
    name: 'Chat Application',
    descriptions: [
      'Fully functional end to end chat application using chat.io API, google authentication. Using firebase as a backend',
    ],

    deployed_url: 'https://awesomechat.netlify.app/',
    github_url: 'https://github.com/tomyotwongjai/chatapp',
    category: ['previous'],
    key_techs: ['React', 'Chat.io api', 'react-hook'],
  },
  {
    id: 6,
    name: 'Static landing page',
    descriptions: [
      'Simple responsive static Landing page using html/css and some javascript for animation & scrollup ',
    ],

    deployed_url: 'https://onepagelanding.netlify.app',
    github_url: 'https://github.com/tomyotwongjai/landingpage-sample',
    category: ['previous'],
    key_techs: [
      'React',
      'openweathercit api',
      'react-hook',
      'callback function',
    ],
  },
  {
    id: 7,
    name: 'Weather Application',
    descriptions: [
      'Weather application build with react. Fetching current weather information using openweather API ',
    ],

    deployed_url: 'https://whatweathercity.netlify.app/',
    github_url: 'https://github.com/tomyotwongjai/react-weather-app',
    category: ['previous'],
    key_techs: [
      'React',
      'openweathercit api',
      'react-hook',
      'callback function',
    ],
  },

  {
    id: 8,
    name: 'First Portfolio',
    descriptions: [
      'Weather application build with react. Fetching current weather information using openweather API ',
    ],

    deployed_url: 'https://tomyotwongjai.netlify.app/',
    github_url: 'https://github.com/tomyotwongjai/portfolio',
    category: ['previous'],
    key_techs: [
      'React',
      'openweathercit api',
      'react-hook',
      'callback function',
    ],
  },
];
