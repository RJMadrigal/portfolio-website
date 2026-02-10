import type { About, Blog,Gallery,  Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Josue",
  lastName: "Madrigal",
  name: `Josue Madrigal`,
  role: "System Engineer",
  avatar: "/images/avatar.jpg",
  email: "josuemadrigalvevo@gmail.com",
  location: "America/Costa_Rica", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Contact with to {person.firstName}</>,
  description: <>If you want to work together, have a question, or just want to say hello, feel free to reach out.</>,
};

const social: Social = [
  // Links are automatically displayed.
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RJMadrigal",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rjosuemadrigal/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@bymadrigal",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Simplify through innovation</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Github</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          my work
        </Text>
      </Row>
    ),
    href: "https://github.com/RJMadrigal",
  },
  subline: (
  <>
    Systems Engineer with hands-on software development and emerging tech.{" "}
    Currently developing PuraCode, a iniciative to bring tech solutions to the community.
  </>
),
};



const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/josue-madrigal-4tikjt",
  },
  intro: {////////////
    display: true,
    title: "Introduction",
    description: (
      <>
        Josué is a Costa Rica–based systems engineer and developer passionate about turning ideas into meaningful digital experiences. His work bridges software development, emerging technologies, and the growing influence of AI.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "4Geeks.io",
        timeframe: "December 2024 - April 2025",
        role: "Software Engineering Intern",
        achievements: [
          <>
            Full-stack development using Angular (TypeScript) and Django, focused on scalability and best
            practices.
          </>,
          <>
            Integrated Stripe for one-time and recurring payments, adapted to international tax regulations.
          </>,
          <>
          Automated workflows via webhooks and Make, enabling real-time monitoring and smart
          decision-making
          </>,
          <>
            Built AI call agent with Gemini models to confirm client appointments automatically.
          </>,
        ],
      },
      {
        company: "Freelance",
        timeframe: "2024",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Delivered custom full-stack solutions for diverse clients, leveraging technologies like ASP.NET Core,
            Python, and TypeScript to address real-world business challenges and drive measurable results.
          </>,
          <>
            Designed and implemented web-based applications with secure authentication, role-based access control,
            and optimized database architectures using SQL Server and other modern data solutions.
          </>,
          <>
            Consistently improved client operational efficiency through automation and strategic system design,
            reducing manual processes and enabling scalable, maintainable solutions.
          </>,
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universidad Autónoma de Centroamérica",
        description: <>System Engineering - Soon to graduate in in 04/2026.</>,
      }
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages & Frameworks:",
        tags: [
          {
            name: "Python",
          },
          {          
            name: "C#",
          },
          {
            name: "Django",
          },
          {
            name: "TypeScript",
          },
          {
            name: "ASP.NET Core",
          },
          {
            name: "Node.js",
          },  
        ],
      },
      {
        title: "Tools & DevOps",
        tags: [
          {
            name: "Git",
          },
          {
            name: "Docker",           
          },
          {
            name: "(CI/CD) concepts",
          },
          {
            name: "Postman",
          },
          { 
            name: "Testing & Debugging",
          },     
        ],
        
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
