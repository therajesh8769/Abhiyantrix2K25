import React, { useState } from 'react';
import { TeamDialog } from './TeamDialog';
import { Users, Megaphone, Briefcase, CalendarClock, Truck, Users2, Palette } from 'lucide-react';

const teams = [
  {
    name: 'Tech Team',
    icon: <Users className="w-5 h-5" />,
    members: [
      {
        name: 'Rajesh Yadav',
        position: 'Tech Lead',
        image: '',
        social: {
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'alex@abhiyantrix.com'
        }
      },
    //   {
    //     name: 'Sarah Chen',
    //     position: 'Full Stack Developer',
    //     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    //     social: {
    //       github: 'https://github.com',
    //       linkedin: 'https://linkedin.com',
    //       email: 'sarah@abhiyantrix.com'
    //     }
    //   },
    //   {
    //     name: 'Michael Park',
    //     position: 'Backend Developer',
    //     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    //     social: {
    //       github: 'https://github.com',
    //       linkedin: 'https://linkedin.com',
    //       email: 'michael@abhiyantrix.com'
    //     }
    //   },
    //   {
    //     name: 'Emma Wilson',
    //     position: 'UI/UX Developer',
    //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    //     social: {
    //       github: 'https://github.com',
    //       linkedin: 'https://linkedin.com',
    //       email: 'emma@abhiyantrix.com'
    //     }
    //   }
    ]
  },
  {
    name: 'Publicity',
    icon: <Megaphone className="w-5 h-5" />,
    members: [
      {
        name: 'David Kim',
        position: 'PR Head',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        social: {
          linkedin: 'https://linkedin.com',
          email: 'david@abhiyantrix.com'
        }
      },
      {
        name: 'Lisa Wang',
        position: 'Social Media Manager',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
        social: {
          linkedin: 'https://linkedin.com',
          email: 'lisa@abhiyantrix.com'
        }
      }
    ]
  },
  {
    name: 'Sponsorship',
    icon: <Briefcase className="w-5 h-5" />,
    members: [
      {
        name: 'John Smith',
        position: 'Sponsorship Head',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef',
        social: {
          linkedin: 'https://linkedin.com',
          email: 'john@abhiyantrix.com'
        }
      }
    ]
  },
  {
    name: 'Event Management',
    icon: <CalendarClock className="w-5 h-5" />,
    members: [
      {
        name: 'Rachel Green',
        position: 'Event Coordinator',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
        social: {
          linkedin: 'https://linkedin.com',
          email: 'rachel@abhiyantrix.com'
        }
      }
    ]
  },
  {
    name: 'Travel and Logistics',
    icon: <Truck className="w-5 h-5" />,
    members: [
      {
        name: 'Tom Wilson',
        position: 'Logistics Head',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
        social: {
          linkedin: 'https://linkedin.com',
          email: 'tom@abhiyantrix.com'
        }
      }
    ]
  },
  {
    name: 'Business and Alumni Meet',
    icon: <Users2 className="w-5 h-5" />,
    members: [
      {
        name: 'Maya Patel',
        position: 'Alumni Relations',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f',
        social: {
          linkedin: 'https://linkedin.com',
          email: 'maya@abhiyantrix.com'
        }
      }
    ]
  },
  {
    name: 'Design Team',
    icon: <Palette className="w-5 h-5" />,
    members: [
      {
        name: 'Chris Lee',
        position: 'Lead Designer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        social: {
          github: 'https://github.com',
          linkedin: 'https://linkedin.com',
          email: 'chris@abhiyantrix.com'
        }
      }
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