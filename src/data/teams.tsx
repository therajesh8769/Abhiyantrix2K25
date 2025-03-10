// import type { ReactNode } from "react"
// import { Banknote, Briefcase, CalendarClock, Truck, Users2, Users, Palette, Megaphone, Music } from "lucide-react"

// interface TeamMember {
//   name: string
//   position: string
//   image: string
//   social: {
//     github?: string
//     linkedin?: string
//     email?: string
//   }
// }

// interface TeamData {
//   name: string
//   icon: ReactNode
//   members: TeamMember[]
// }

// export const teams: TeamData[] = [
//   {
//     name: "Finance",
//     icon: <Banknote className="w-5 h-5" />,
//     members: [
//       {
//         name: "Nithin P",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "M L Narasimha",
//         position: "3rd Year",
//         image: "./images/teams/narshima.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//     ],
//   },
//   {
//     name: "Sponsorship",
//     icon: <Briefcase className="w-5 h-5" />,
//     members: [
//       {
//         name: "Bikash Koiri",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Yaswanth P",
//         position: "3rd Year",
//         image: "./images/teams/yaswanth.JPG",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Abhirup Bhandari",
//         position: "3rd Year",
//         image: "./images/teams/abhirup.JPG",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Navonil Chatterjee",
//         position: "3rd Year",
//         image: "./images/teams/navonil.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//     ],
//   },
//   {
//     name: "Event",
//     icon: <CalendarClock className="w-5 h-5" />,
//     members: [
//       {
//         name: "Sahil Nikam",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Arya Jain",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Saurav Kumar",
//         position: "3rd Year",
//         image: "./images/teams/saurav.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Satish Gupta",
//         position: "3rd Year",
//         image: "./images/teams/satish.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "B Ramprasad",
//         position: "3rd Year",
//         image: "./images/teams/ram.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Anurag Singh",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Mandeep Datta",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//     ],
//   },
//   {
//     name: "Travel and Logistics",
//     icon: <Truck className="w-5 h-5" />,
//     members: [
//       {
//         name: "Aryan Agarwal",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Aditya Didolkar",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Adiptya Gosh",
//         position: "3rd Year",
//         image: "./images/teams/adiptya.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Jyotiranjan Maholiya",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Samarth",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//     ],
//   },
//   {
//     name: "Industrial Alumni Meet",
//     icon: <Users2 className="w-5 h-5" />,
//     members: [
//       {
//         name: "Arnait Ghosh",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Arghya Pal",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Sadhan Das",
//         position: "3rd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Vaishanvi Devigre",
//         position: "3rd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Tamal Mahanty",
//         position: "3rd Year",
//         image: "./images/teams/tamal.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Rohit Chaurasia",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//     ],
//   },
//   {
//     name: "Tech Team",
//     icon: <Users className="w-5 h-5" />,
//     members: [
//       {
//         name: "Rajesh",
//         position: "Tech Lead",
//         image: "./images/teams/rajesh1.jpg",
//         social: {
//           github: "https://www.github.com/therajesh8769",
//           linkedin: "https://www.linkedin.com/in/hyraj26",
//           email: "rajesh8769.works@gmail.com",
//         },
//       },
//       {
//         name: "Manish Pawar",
//         position: "2nd Year",
//         image: "./images/teams/manish.JPG",
//         social: {
//           github: "",
//           linkedin: "",
//           email: "",
//         },
//       },
//     ],
//   },
//   {
//     name: "Publicity and Social Media",
//     icon: <Megaphone className="w-5 h-5" />,
//     members: [
//       {
//         name: "Udayan Das",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Soumik Mondal",
//         position: "4th Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Nurzaman Hoque",
//         position: "3rd Year",
//         image: "./images/teams/nur.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Shahina Nigar",
//         position: "3rd Year",
//         image: "./images/teams/sahina.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Biswajit Sardar",
//         position: "3rd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Dipam Nayak",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Akash Boxi",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Nitya Srivastav",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//     ],
//   },
//   {
//     name: "Design and Content",
//     icon: <Palette className="w-5 h-5" />,
//     members: [
//       {
//         name: "Adityadev",
//         position: "3rd Year",
//         image: "./images/teams/adityadev.jpg",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Ankita Kumari",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Utpanna",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//     ],
//   },
//   {
//     name: "Cultural",
//     icon: <Music className="w-5 h-5" />,
//     members: [
//       {
//         name: "Sayani Biswas",
//         position: "3rd Year",
//         image: "./images/teams/sayani.webp",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//       {
//         name: "Namita Binu",
//         position: "2nd Year",
//         image: "",
//         social: {
//           linkedin: "",
//           email: "",
//         },
//       },
//     ],
//   },
// ]

