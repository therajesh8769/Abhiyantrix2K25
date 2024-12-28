// import React from 'react';
// import { EventType } from './types';
// import { EVENTS } from './constants/events';

// interface EventSelectionProps {
//   selectedEvents: EventType[];
//   onEventToggle: (event: EventType) => void;
//   errors?: { selectedEvents?: string };
// }

// export function EventSelection({ selectedEvents, onEventToggle, errors }: EventSelectionProps) {
//   return (
//     <div className="space-y-4">
//       <div className="text-center space-y-2">
//         <h3 className="text-xl font-orbitron text-blue-300">Choose Your Missions</h3>
//         <p className="text-gray-400 text-sm">Select one or more events to participate in</p>
//       </div>

//       <div className="grid gap-2">
//         {EVENTS.map((event) => {
//           const Icon = event.icon;
//           const isSelected = selectedEvents.includes(event.id);
          
//           return (
//             <button
//               key={event.id}
//               type="button"
//               onClick={() => onEventToggle(event.id)}
//               className={`group relative p-1 rounded-lg border transition-all duration-300 ${
//                 isSelected
//                   ? 'bg-blue-500/30 border-blue-400 transform scale-[1.02]'
//                   : 'bg-black/50 border-blue-500/30 hover:bg-blue-500/20'
//               }`}
//             >
//               <div className="flex items-start space-x-4">
//                 <div className={`p-2 rounded-full ${
//                   isSelected
//                     ? 'bg-blue-500/40'
//                     : 'bg-blue-500/20 group-hover:bg-blue-500/30'
//                 } transition-colors`}>
//                   <Icon className={`w-6 h-6 ${
//                     isSelected
//                       ? 'text-blue-300'
//                       : 'text-blue-400'
//                   }`} />
//                 </div>
//                 <div className="flex-1 text-left">
//                   <h4 className={`font-orbitron text-sm mb-1 transition-colors ${
//                     isSelected
//                       ? 'text-blue-300'
//                       : 'text-blue-400'
//                   }`}>
//                     {event.title}
//                   </h4>
                  
//                 </div>
//                 <div className={`w-5 h-5 rounded-full border-2 transition-all ${
//                   isSelected
//                     ? 'border-blue-400 bg-blue-400'
//                     : 'border-blue-500/50'
//                 }`}>
//                   {isSelected && (
//                     <svg className="w-full h-full text-black p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                     </svg>
//                   )}
//                 </div>
//               </div>
//             </button>
//           );
//         })}
//       </div>

//       {errors?.selectedEvents && (
//         <p className="text-red-500 text-sm text-center mt-4">{errors.selectedEvents}</p>
//       )}
//     </div>
//   );
// }
import React from 'react';
import { EventType } from './types';
import { EVENTS } from './constants/events';

interface EventSelectionProps {
  selectedEvents: EventType[];
  onEventToggle: (event: EventType) => void;
  errors?: { selectedEvents?: string };
}

export function EventSelection({ selectedEvents, onEventToggle, errors }: EventSelectionProps) {
  return (
    <div className="space-y-3">
      <div className="text-center space-y-1">
        
        <p className="text-gray-400 text-sm">Select one or more events to participate in</p>
      </div>

      <div className="relative max-h-[250px] overflow-y-auto custom-scrollbar">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-blue-900/20 pointer-events-none" />
        
        <div className="space-y-1 p-1">
          {EVENTS.map((event) => {
            const Icon = event.icon;
            const isSelected = selectedEvents.includes(event.id);
            
            return (
              <button
                key={event.id}
                type="button"
                onClick={() => onEventToggle(event.id)}
                className={`group relative w-full p-3 rounded-lg border transition-all duration-300 
                           backdrop-blur-sm transform hover:translate-x-1
                           ${isSelected
                             ? 'bg-blue-500/30 border-blue-400 translate-x-2'
                             : 'bg-black/50 border-blue-500/30 hover:bg-blue-500/20'
                           }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full transition-colors
                                 ${isSelected
                                   ? 'bg-blue-500/40'
                                   : 'bg-blue-500/20 group-hover:bg-blue-500/30'
                                 }`}>
                    <Icon className={`w-5 h-5 ${
                      isSelected ? 'text-blue-300' : 'text-blue-400'
                    }`} />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <h4 className={`font-orbitron text-sm transition-colors ${
                      isSelected ? 'text-blue-300' : 'text-blue-400'
                    }`}>
                      {event.title}
                    </h4>
                    
                  </div>

                  <div className={`w-5 h-5 rounded-full border-2 transition-all ${
                    isSelected
                      ? 'border-blue-400 bg-blue-400'
                      : 'border-blue-500/50'
                  }`}>
                    {isSelected && (
                      <svg className="w-full h-full text-black p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className={`mt-2 text-xs text-gray-400 transition-all duration-300 ${
                  isSelected ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                 
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {errors?.selectedEvents && (
        <p className="text-red-500 text-sm text-center mt-4">{errors.selectedEvents}</p>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
}