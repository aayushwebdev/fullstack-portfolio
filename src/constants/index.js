export const myProjects = [
  {
    id: 1,
    title: "Converso - AI Powered LMS",
    description:
      "Provides students with personalized voice-enabled learning sessions, allowing them to interact with an AI tutor for better subject understanding.",
    subDescription: [
      "Built a scalable platform using Next.js, integrating VapiAI API for real-time voice-based AI tutoring.",
      "Implemented secure authentication using Clerk and Supabase as a database management for session scheduling.",
      "Designed a responsive frontend with SCSS, ensuring accessibility across devices.",
      "Added features like session booking, reminders, and interactive Q&A to enhance learning efficiency.",
    ],
    href: "https://converso-lms.vercel.app/",
    logo: "",
    image: "/assets/projects/converso.png",
    tags: [
      {
        id: 1,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Authentication",
        path: "/assets/logos/auth0.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Reviewly - AI Code Reviewer",
    description:
      "Helps users quickly understand customer sentiment by analyzing and summarizing product reviews from multiple sources.",
    subDescription: [
      "Built using MERN stack, integrating Gemini API for generating concise and meaningful summaries. ",
      "Implemented secure user authentication and MongoDB database for storing reviews and summaries.",
      "Designed a responsive UI with Tailwind CSS, ensuring smooth usability across devices.",
      "Added features like sentiment analysis, keyword extraction, and export options to enhance user insights.",
    ],
    href: "https://ai-code-reviewer-theta.vercel.app/",
    logo: "",
    image: "/assets/projects/code-review.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Samvad AI – Conversational AI Platform",
    description:
      "Delivers contextual AI-powered text generation, similar to ChatGPT, enabling users to generate high-quality content seamlessly.",
    subDescription: [
      "Developed the application using React.js, Node.js, and Express, integrating Google Gemini API for advanced AI text generation.",
      "Implemented secure authentication and chat history storage with Firebase.",
      "Designed a clean, responsive frontend with SCSS, improving usability and engagement.",
      "Added features like error handling, message persistence, and real-time responses to ensure reliability.",
    ],
    href: "https://samvad-ai.vercel.app/",
    logo: "",
    image: "/assets/projects/samvad-ai.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Gemini API",
        path: "",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "NextJS Portfolio Website",
    description:
      "Showcases professional experience, projects, and client testimonials through a clean and modern UI designed to attract potential recruiters and clients.",
    subDescription: [
      "Built using Next.js to leverage server-side rendering for performance and SEO optimization.",
      "Implemented smooth navigation with dynamic routing and integrated GitHub/LinkedIn links.",
      "Designed a dark-themed responsive interface with Tailwind CSS, ensuring accessibility across all devices.",
      "Added features like projects showcase, testimonial slider, and resume download option, creating a professional personal brand presence.",
    ],
    href: "https://aayush-devx.vercel.app/",
    logo: "",
    image: "/assets/projects/portfolio.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Github",
        path: "/assets/logos/github.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Dice Game",
    description:
      "Demonstrates core React concepts through an engaging dice-based game that allows users to roll dice and calculate scores dynamically.",
    subDescription: [
      "Developed using React.js, applying useState and component reusability for state-driven interactions.",
      "Ensured responsive layout with modern styling for a seamless gaming experience.",
      "Implemented features like real-time score tracking, conditional rendering, and user feedback, highlighting clarity in React fundamentals.",
    ],
    href: "https://dice-game-lime-six.vercel.app/",
    logo: "",
    image: "/assets/projects/dice-game.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "/",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/aayush-meshram-b70420258/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Frontend Engineer",
    job: "Outlier AI",
    date: "2025",
    contents: [
      "Collaborated on AI model training workflows, enhancing precision of prompt-based website design generation.",
      "Designed and tested responsive UI components to support AI-driven design outputs.",
      "Optimized frontend performance and integrated debugging tools for smoother rendering.",
      "Contributed to improving AI training datasets by validating and refining generated outputs.",
      // "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    job: "FARCRAWS - The ISRO-funded Startup",
    date: "2024-2025",
    contents: [
      "Built a web portal to connect GSM-based rainwater sampling devices with backend systems.",
      "Transitioned from frontend developer to full stack role, handling APIs, databases, and server logic.",
      "Improved API response latency by 30% using async calls and query optimization.",
      "Deployed system to production, ensuring reliability and seamless IoT integration.",
      // "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Technical Head & Developer",
    job: "Bettel",
    date: "2023",
    contents: [
      "Developed fan engagement dashboards and leaderboards with React.js & APIs.",
      "Promoted to Technical Head, managed a 5-member development team and roadmap execution.",
      "Oversaw end-to-end product lifecycle: feature planning, development, testing, and deployment.",
      "Enhanced user engagement with real-time stats tracking and tournament management features.",
    ],
  },
];
export const reviews = [
  {
    name: "Keshav Gupta",
    username: "Bettel - CEO",
    body: "Aayush delivered impactful features and led our dev team with reliability and speed.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Dennis Quaid",
    username: "AI Hello",
    body: "He delivered a sleek and functional React-based dashboard with interactive charts. His attention to detail and timely delivery made the project a success",
    img: "https://robohash.org/jill",
  },
  {
    name: "Shwetank Aryan",
    username: "FARCRAWS - Co-founder",
    body: "Aayush’s adaptability and full stack skills made him a key contributor to our IoT project.",
    img: "https://robohash.org/john",
  },
  {
    name: "Aditya Singh",
    username: "Makhanut",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Yatendra Kumar",
    username: "AG Analytics",
    body: "He built our WordPress website exactly as envisioned — clean, professional, and delivered on time. Great experience working with him.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Arnav Gupta",
    username: "Digital Solutions",
    body: "This exceeded all my expectations, deleviered the best work. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  // {
  //   name: "Dave",
  //   username: "@dave",
  //   body: "Simply breathtaking. The best decision I've made in a while.",
  //   img: "https://robohash.org/dave",
  // },
  {
    name: "Marsha Garth",
    username: "Upwork Client",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];