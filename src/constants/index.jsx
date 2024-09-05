import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Expert in Building Interactive UIs",
    image: user1,
    text: "With extensive experience in JavaScript and React.js, I specialize in developing dynamic and user-centric interfaces. My focus is on creating highly interactive components that enhance user engagement, delivering smooth, responsive, and intuitive applications that provide an optimal experience across devices.",
  },
  {
    user: "Jane Smith",
    company: "JavaScript Proficiency and Best Practices",
    image: user2,
    text: "As a frontend developer, I have mastered JavaScript, including the latest ES6+ features such as async/await, closures, and arrow functions. My deep understanding of JavaScript enables me to write clean, maintainable, and efficient code. I follow UI/UX best practices, ensuring that the interfaces I create are accessible, user-friendly, and visually cohesive across devices.",
  },
  {
    user: "David Johnson",
    company: "Performance Optimization",
    image: user3,
    text: "Performance is a key factor in delivering quality web applications. I focus on optimizing load times and improving application efficiency by implementing techniques such as lazy loading, code splitting, and reducing bundle sizes. This results in faster, more efficient applications that provide users with a smooth and fast experience..",
  },
  {
    user: "Ronee Brown",
    company: "API Integration Expertise",
    image: user4,
    text: "I have a solid track record of integrating RESTful APIs into frontend applications, enabling dynamic content updates and efficient data handling. My ability to connect applications with backend services ensures smooth communication between the frontend and backend, enhancing the overall user experience.",
  },
  {
    user: "Michael Wilson",
    company: "Modular and Reusable Components",
    image: user5,
    text: "Managing application state effectively is crucial for maintaining performance and data consistency. I am well-versed in using state management tools like Redux and Context API, which allow me to handle complex data flows, manage asynchronous actions, and ensure that applications remain predictable and scalable.",
  },
  {
    user: "Emily Davis",
    company: "Dynamic User Interfaces",
    image: user6,
    text: "With a strong command of React.js, I excel in building interactive and responsive user interfaces. My focus is on creating components that are not only visually appealing but also highly functional. I ensure that users have seamless experiences through fast, smooth, and intuitive web interactions.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Relevant Experience",
    description:
      "I have 3.5 years of experience in frontend development, specifically using JavaScript and React.js, which are essential for the role.",
  },
  {
    icon: <Fingerprint />,
    text: "Technical Expertise",
    description:
      " My expertise in React.js allows me to build high-performance, dynamic web applications with efficient and clean code.",
  },
  {
    icon: <ShieldHalf />,
    text: "Problem-Solving Skills",
    description:
      "I have a strong ability to solve complex technical challenges and troubleshoot issues effectively, ensuring smooth project delivery.",
  },
  {
    icon: <BatteryCharging />,
    text: "Adaptability",
    description:
      "I quickly learn and adapt to new technologies, frameworks, and project requirements.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration",
    description:
      "I have experience working in cross-functional teams, contributing to a collaborative and productive environment.",
  },
  {
    icon: <GlobeLock />,
    text: "API Integration",
    description:
      "I have experience with RESTful APIs and integrating them seamlessly into frontend applications for dynamic content updates.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
