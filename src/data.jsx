import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://imgur.com/hCRgnxB.png',
    url: 'https://app.netlify.com/sites/wineinfo',
    github: 'https://github.com/iyer403/wineproject',
    title: 'first project',
    text: 'This project was created using the latest version of react router.All the loading and form actions were done using react router dom methods which caches data and improves performance.',
  },
  {
    id: nanoid(),
    img: 'https://imgur.com/rkD87tx.png',

    url: 'https://tantopizza.netlify.app/',
    github: 'https://github.com/iyer403/tantopizza',
    title: 'second project',
    text: 'This website project uses tailwind component library to create the UI of the website. React slider has been used to create the image carousel.',
  },
];
