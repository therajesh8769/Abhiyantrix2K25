export interface TeamMember {
  name: string
  position: string
  image: string
  social: {
    github?: string
    linkedin?: string
    email?: string
  }
}

export interface TeamData {
  name: string
  iconName: string
  members: TeamMember[]
}

export const teams: TeamData[] = [
  {
    name: "Main Coordinator",
    iconName: "Crown",
    members: [
      {
        name: "Sandeep Sankuru",
        position: "Main Coordinator (4th Year)",
        image: "./images/teams/san.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Mehul Mehta",
        position: "Main Coordinator (3rd Year)",
        image: "./images/teams/mehul.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
  {
    name: "Finance",
    iconName: "Banknote",
    members: [
      {
        name: "Navonil Chatterjee",
        position: "Finance Head (4th Year)",
        image: "./images/teams/navonil.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "M L Narasimha",
        position: "Finance Head (4th Year)",
        image: "./images/teams/narshima.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Shlok Vyas",
        position: "Finance Team (3rd Year)",
        image: "./images/teams/shlok.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Shreyansh Jharaniya",
        position: "Finance Team (3rd Year)",
        image: "./images/teams/sreya.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
  {
    name: "Sponsorship",
    iconName: "Briefcase",
    members: [
      {
        name: "Yaswanth Pedapudi",
        position: "Sponsorship Head (4th Year)",
        image: "./images/teams/yaswanth.JPG",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Abhirup Bandari",
        position: "Sponsorship Head (4th Year)",
        image: "./images/teams/abhirup.JPG",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Manish Pawar",
        position: "Sponsorship Team (3rd Year)",
        image: "./images/teams/manish.JPG",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Samarth Kumar",
        position: "Sponsorship Team (3rd Year)",
        image: "./images/teams/samarth.png",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Rohit Chourasia",
        position: "Sponsorship Team (3rd Year)",
        image: "./images/teams/rohit.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Ashutosh Singh",
        position: "Sponsorship Team (2nd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Sontu Gaurav",
        position: "Sponsorship Team (2nd Year)",
        image: "./images/teams/gau.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
  {
    name: "Event",
    iconName: "CalendarClock",
    members: [
      {
        name: "Satish Gupta",
        position: "Event Head (4th Year)",
        image: "./images/teams/satish.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Saurav Kumar",
        position: "Event Head (4th Year)",
        image: "./images/teams/saurav.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Pratham Patel",
        position: "Event Team (3rd Year)",
        image: "./images/teams/pratham.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Dipam Nayek",
        position: "Event Team (3rd Year)",
        image: "./images/teams/dipam.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Darshan Parmar",
        position: "Event Team (2nd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Bikram Patir",
        position: "Event Team (2nd Year)",
        image: "./images/teams/bik.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
  {
    name: "Travel and Logistics",
    iconName: "Truck",
    members: [
      {
        name: "Adiptya Ghosh",
        position: "Travel and Logistics Head (4th Year)",
        image: "./images/teams/adiptya.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Biswajit Sardar",
        position: "Travel and Logistics Head (4th Year)",
        image: "./images/teams/biswajit.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Jyotiranjan Maholiya",
        position: "Travel and Logistics Team (3rd Year)",
        image: "./images/teams/jyoti.JPG",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Buddha Jaswanth Raju",
        position: "Travel and Logistics Team (3rd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Deep Sankar Bari",
        position: "Travel and Logistics Team (3rd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Hami Riyas",
        position: "Travel and Logistics Team (2nd Year)",
        image: "./images/teams/hami.HEIC",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Ritam Kundu",
        position: "Travel and Logistics Team (2nd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
  {
    name: "Cultural",
    iconName: "Music",
    members: [
      {
        name: "Sayani Biswas",
        position: "Cultural Head (4th Year)",
        image: "./images/teams/sayani.webp",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Namitha Binu",
        position: "Cultural Team (3rd Year)",
        image: "./images/teams/namita.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Devika Rajesh",
        position: "Cultural Team (2nd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
  {
    name: "Design and Content",
    iconName: "Palette",
    members: [
      {
        name: "Aditya Dev",
        position: "Design and Content Head (4th Year)",
        image: "./images/teams/adityadev.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Utpanna Gupta",
        position: "Design and Content Team (3rd Year)",
        image: "./images/teams/utpanna.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Anisha Soha",
        position: "Design and Content Team (3rd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Deboja Das",
        position: "Design and Content Team (2nd Year)",
        image: "./images/teams/debo.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Bhumika Mehra",
        position: "Design and Content Team (2nd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
  {
    name: "Publicity and Social Media",
    iconName: "Megaphone",
    members: [
      {
        name: "Nurjaman Hoque",
        position: "Publicity and Social Media Head (4th Year)",
        image: "./images/teams/nur.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Joyjit Porey",
        position: "Publicity and Social Media Head (4th Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Jit Malakar",
        position: "Publicity and Social Media Team (3rd Year)",
        image: "./images/teams/jit.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Nitya Srivastav",
        position: "Publicity and Social Media Team (3rd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Jayant Balkrishna Dhakate",
        position: "Publicity and Social Media Team (3rd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Anchal Chaudhury",
        position: "Publicity and Social Media Team (2nd Year)",
        image: "./images/teams/anch.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
  {
    name: "Industrial Alumni Meet",
    iconName: "Users2",
    members: [
      {
        name: "Sadhan Das",
        position: "Industrial Alumni Meet Head (4th Year)",
        image: "./images/teams/sadhan.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Tamal Mahanty",
        position: "Industrial Alumni Meet Head (4th Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Anurag Rajeshkumar Singh",
        position: "Industrial Alumni Meet Team (3rd Year)",
        image: "./images/teams/anurag.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Pushpika Patel",
        position: "Industrial Alumni Meet Team (2nd Year)",
        image: "./images/teams/push.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Anamika Roy",
        position: "Industrial Alumni Meet Team (2nd Year)",
        image: "./images/teams/anamika.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
  {
    name: "Web Development",
    iconName: "Code",
    members: [
      {
        name: "Rajesh Yadav",
        position: "Web Development Head (4th Year)",
        image: "./images/teams/rajesh1.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Pritam Saha",
        position: "Web Development Team (3rd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Aditya Jhunjhunwala",
        position: "Web Development Team (3rd Year)",
        image: "./images/teams/adityajjw.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Krishi Tiwari",
        position: "Web Development Team (3rd Year)",
        image: "./images/teams/krishi.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Rahul Kumar",
        position: "Web Development Team (2nd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Anjala",
        position: "Web Development Team (2nd Year)",
        image: "./images/teams/general.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Jit Malakar",
        position: "Web Development Team (3rd Year)",
        image: "./images/teams/jit.jpeg",
        social: {
          linkedin: "",
          email: "",
        },
      },
    ],
  },
]