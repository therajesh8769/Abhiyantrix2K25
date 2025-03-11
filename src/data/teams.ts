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
      name: "Finance",
      iconName: "Banknote",
      members: [
        {
          name: "Nithin P",
          position: "Finance Head",
          image: "./images/teams/Nithin.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "M L Narasimha",
          position: "Finance Team",
          image: "./images/teams/narshima.jpg",
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
          name: "Bikash Koiri",
          position: "Sponsorship Head",
          image: "./images/teams/Bikash.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Yaswanth P",
          position: "Sponsorship Team",
          image: "./images/teams/yaswanth.JPG",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Abhirup Bhandari",
          position: "Sponsorship Team",
          image: "./images/teams/abhirup.JPG",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Navonil Chatterjee",
          position: "Sponsorship Team",
          image: "./images/teams/navonil.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
            name: "Shlok Vyas",
            position: "Sponsorship Team",
            image: "./images/teams/shlok.jpg",
            social: {
              linkedin: "",
              email: "",
            },
          },
          {
            name: "Mehul Mehta",
            position: "Sponsorship Team",
            image: "./images/teams/mehul.jpg",
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
          name: "Sahil Nikam",
          position: "Event Head",
          image: "./images/teams/sahil.png",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Arya Jain",
          position: "Event Head",
          image: "./images/teams/arya.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Saurav Kumar",
          position: "Event Team",
          image: "./images/teams/saurav.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Satish Gupta",
          position: "Event Team",
          image: "./images/teams/satish.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "B Ramprasad",
          position: "Event Team",
          image: "./images/teams/ram.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Anurag Singh",
          position: "Event Team",
          image: "./images/teams/anurag.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Mandeep Datta",
          position: "Event Team",
          image:"./images/teams/mandeep.jpg",
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
          name: "Aryan Agarwal",
          position: "Travel and Logistics Head",
          image:"./images/teams/aryan.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Aditya Didolkar",
          position: "Travel and Logistics Head",
          image: "./images/teams/general.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Adiptya Gosh",
          position: "Travel and Logistics Team",
          image: "./images/teams/adiptya.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Jyotiranjan Maholiya",
          position: "Travel and Logistics Team",
          image: "./images/teams/jyoti.JPG",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Samarth",
          position: "Travel and Logistics Team",
          image: "./images/teams/samarth.png",
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
          name: "Arnajit Ghosh",
          position: "Industrial Alumni Meet Head",
          image: "./images/teams/arnajit.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Arghya Pal",
          position: "Industrial Alumni Meet Head",
          image: "./images/teams/arghya.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Sadhan Das",
          position: "Industrial Alumni Meet Team",
          image:"./images/teams/sadhan.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Vaishanvi Devigre",
          position: "Industrial Alumni Meet Team",
          image: "./images/teams/vaishanvi.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Tamal Mahanty",
          position: "Industrial Alumni Meet Team",
          image: "./images/teams/tamal.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Rohit Chaurasia",
          position: "Industrial Alumni Meet Team",
          image: "./images/teams/rohit.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
      ],
    },
    {
      name: "Tech",
      iconName: "Users",
      members: [
        {
          name: "Rajesh Yadav",
          position: "Tech Lead",
          image: "./images/teams/rajesh1.jpg",
          social: {
            github: "https://www.github.com/therajesh8769",
            linkedin: "https://www.linkedin.com/in/hyraj26",
            email: "rajesh8769.works@gmail.com",
          },
        },
        {
          name: "Manish Pawar",
          position: "Tech Team",
          image: "./images/teams/manish.JPG",
          social: {
            github: "",
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
          name: "Udayan Das",
          position: "Publicity and Social Media Head",
          image: "./images/teams/Udayan.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Soumik Mondal",
          position: "Publicity and Social Media Head",
          image: "./images/teams/soumik.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Nurzaman Hoque",
          position: "Publicity and Social Media Team",
          image: "./images/teams/nur.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Shahina Nigar",
          position: "Publicity and Social Media Team",
          image: "./images/teams/sahina.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Biswajit Sardar",
          position: "Publicity and Social Media Team",
          image:"./images/teams/biswajit.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Dipam Nayak",
          position: "Publicity and Social Media Team",
          image:"./images/teams/dipam.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Akash Boxi",
          position: "Publicity and Social Media Team",
          image:"./images/teams/general.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Nitya Srivastav",
          position: "Publicity and Social Media Team",
          image:"./images/teams/general.jpg",
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
          name: "Adityadev",
          position: "Design and Content Head",
          image: "./images/teams/adityadev.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Ankita Kumari",
          position: "Design and Content Team",
          image: "./images/teams/ankita.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Utpanna",
          position: "Design and Content Team",
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
          position: "Cultural Head",
          image: "./images/teams/sayani.webp",
          social: {
            linkedin: "",
            email: "",
          },
        },
        {
          name: "Namita Binu",
          position: "Cultural Team",
          image: "./images/teams/namita.jpg",
          social: {
            linkedin: "",
            email: "",
          },
        },
      ],
    },
  ]
  
  