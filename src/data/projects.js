import bazarImage from "../assets/images/projects/bazar.PNG";
import monasbahImage from "../assets/images/projects/monasbah.PNG";
import yengzImage from "../assets/images/projects/Yengz.png";

const projects = [
  {
    id: 1,
    number: "01",

    name: "Monsbah",

    category: "C2C Marketplace",

    description:
      "A production C2C marketplace web application adapted from a mobile product into a scalable and responsive web experience.",

    features: [
      "Listing, selling, renting, browsing, and purchasing flows",
      "Authentication and authorization",
      "Search and filtering",
      "User profiles and buyer-seller messaging",
    ],

    technologies: ["React.js", "Redux Toolkit", "React Query", "SASS"],

    image: monasbahImage,

    github: "",

    live: "https://monsbah.vercel.app",
  },

  {
    id: 2,
    number: "02",

    name: "Bazar",

    category: "Multi-Store E-Commerce",

    description:
      "A multi-store e-commerce platform bringing multiple merchants and their products into a unified marketplace experience.",

    features: [
      "Storefront and product browsing",
      "Search and product discovery",
      "Store navigation",
      "Discount and coupon functionality",
      "Merchant and administrative workflows",
    ],

    technologies: ["React.js", "Redux Toolkit", "React Query", "SASS"],

    image: bazarImage,

    github: "",

    live: "https://bazar-chi-sage.vercel.app/",
  },

  {
    id: 3,
    number: "03",

    name: "Yengz",

    category: "Freelance Marketplace",

    description:
      "A production two-sided freelance marketplace connecting clients seeking services with freelancers offering their expertise.",

    features: [
      "Service and project discovery",
      "Search and category-based filtering",
      "Service listings and offer views",
      "Service requests and offers",
      "Client-freelancer communication",
      "Agreement workflows",
    ],

    technologies: ["React.js", "Redux Toolkit", "React Query", "SASS"],

    image: yengzImage,

    github: "",

    live: "https://yengz.vercel.app/",
  },
];

export default projects;
