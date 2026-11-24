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
        name: "Mehul Mehta",
        position: "Main Coordinator",
        image: "./images/teams/mehul.jpg",
        social: {
          linkedin: "",
          email: "",
        },
      },
      {
        name: "Bikram Patir",
        position: "Main Coordinator",
        image: "./images/teams/bik.jpeg",
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
        name: "Ashutosh Singh",
        position: "Secretary - AES",
        image: "./images/teams/ashutosh.jpeg",
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
        name: "Coming Soon",
        position: "Event Team",
        image: "./images/teams/general.jpg",
        social: {},
      },
    ],
  },
  {
    name: "Sponsorship",
    iconName: "Briefcase",
    members: [
      {
        name: "Coming Soon",
        position: "Sponsorship Team",
        image: "./images/teams/general.jpg",
        social: {},
      },
    ],
  },
  {
    name: "Travel and Logistics",
    iconName: "Truck",
    members: [
      {
        name: "Coming Soon",
        position: "Travel and Logistics Team",
        image: "./images/teams/general.jpg",
        social: {},
      },
    ],
  },
  {
    name: "Cultural",
    iconName: "Music",
    members: [
      {
        name: "Coming Soon",
        position: "Cultural Team",
        image: "./images/teams/general.jpg",
        social: {},
      },
    ],
  },
  {
    name: "Design and Content",
    iconName: "Palette",
    members: [
      {
        name: "Coming Soon",
        position: "Design and Content Team",
        image: "./images/teams/general.jpg",
        social: {},
      },
    ],
  },
  {
    name: "Publicity and Social Media",
    iconName: "Megaphone",
    members: [
      {
        name: "Coming Soon",
        position: "Publicity and Social Media Team",
        image: "./images/teams/general.jpg",
        social: {},
      },
    ],
  },
  {
    name: "Industrial Alumni Meet",
    iconName: "Users2",
    members: [
      {
        name: "Coming Soon",
        position: "Industrial Alumni Meet Team",
        image: "./images/teams/general.jpg",
        social: {},
      },
    ],
  },
  {
    name: "Web Development",
    iconName: "Code",
    members: [
      {
        name: "Coming Soon",
        position: "Web Development Team",
        image: "./images/teams/general.jpg",
        social: {},
      },
    ],
  },
]
