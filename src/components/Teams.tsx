import React, { useState } from 'react';
import { TeamDialog } from './TeamDialog';
import { Users, Megaphone, Briefcase, CalendarClock, Truck, Users2, Palette,Banknote,Music } from 'lucide-react';

const teams = [
  {
    name: 'Tech Team',
    icon: <Users className="w-5 h-5" />,
    members: [
      {
        name: 'Rajesh Yadav',
        position: 'Tech Lead',
        image: './images/teams/rajesh1.jpg',
        social: {
          github: 'https://www.github.com/therajesh8769',
          linkedin: 'https://www.linkedin.com/in/hyraj26',
          email: 'rajesh8769.works@gmail.com'
        }
      },
      {
        name: 'Manish Pawar',
        position: '2nd Year',
        image: '',
        social: {
          github: '',
          linkedin: '',
          email: ''
        }
      },
     
      
    ]
  },
  {
    name: 'Publicity and Social Media',
    icon: <Megaphone className="w-5 h-5" />,
    members: [
      {
        name: 'Udayan Das',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Soumik Mondal',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Nurzaman Hoque',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Shahina Nigar',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Biswajit Sardar',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Dipam Nayak',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Akash Boxi',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Nitya Srivastav',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
    ]
  },
  {
    name: 'Sponsorship',
    icon: <Briefcase className="w-5 h-5" />,
    members: [
      {
        name: 'Bikash Koiri',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Yaswanth P',
        position: '3rd Year',
        image: './images/teams/yashwanth.jpg',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Abhirup Bhandari',
        position: '3rd Year',
        image: './images/teams/abhirup.JPG',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Navonil Chatterjee',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      }


    ]
  },
  {
    name: 'Event',
    icon: <CalendarClock className="w-5 h-5" />,
    members: [
      {
        name: 'Sahil Nikam',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Arya Jain',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Saurav Kumar',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Satish Gupta',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'B Ramprasad',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Anurag Singh',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Mandeep Datta',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      }

    ]
  },
  {
    name: 'Travel and Logistics',
    icon: <Truck className="w-5 h-5" />,
    members: [
      {
        name: 'Aryan Agarwal',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Aditya Didolkar',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Adiptya Gosh',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Jyotiranjan Maholiya',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Samarth',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      }





    ]
  },
  {
    name: 'Industrial Alumni Meet',
    icon: <Users2 className="w-5 h-5" />,
    members: [
      {
        name: 'Arnait Ghosh',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Arghya Pal',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Sadhan Das',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Vaishanvi Devigre',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Tamal Mahanty',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Rohit Chaurasia',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },

    ]
  },
  {
    name: 'Design and Content',
    icon: <Palette className="w-5 h-5" />,
    members: [
      {
        name: 'Adityadev',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Ankita Kumari',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Utpanna',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
    ]
  },
  {
    name: 'Cultural',
    icon: <Music className="w-5 h-5" />,
    members: [
      {
        name: 'Sayani Biswas',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'Namita Binu',
        position: '2nd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      
    ]
  },
  {
    name: 'Finance',
    icon: <Banknote className="w-5 h-5" />,
    members: [
      {
        name: 'Nithin P',
        position: '4th Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      {
        name: 'M L Narasimha',
        position: '3rd Year',
        image: '',
        social: {
          linkedin: '',
          email: ''
        }
      },
      
    ]
  }
];

export function Teams() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

  return (
    <div className="py-8">
      <h4 className="font-orbitron text-lg mb-6 text-blue-400">Our Teams</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {teams.map((team, index) => (
          <button
            key={index}
            onClick={() => setSelectedTeam(index)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500/10 rounded-lg
                     hover:bg-blue-500/20 transition-colors text-left group"
          >
            <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
              {team.icon}
            </span>
            <span className="text-gray-400 group-hover:text-gray-300 text-sm transition-colors">
              {team.name}
            </span>
          </button>
        ))}
      </div>

      <TeamDialog
        isOpen={selectedTeam !== null}
        onClose={() => setSelectedTeam(null)}
        teamName={selectedTeam !== null ? teams[selectedTeam].name : ''}
        members={selectedTeam !== null ? teams[selectedTeam].members : []}
      />
    </div>
  );
}