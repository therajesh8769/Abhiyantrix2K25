// 'use client'

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { X, Download, Filter } from 'lucide-react';
// import * as XLSX from 'xlsx';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// //axios.defaults.baseURL = 'http://localhost:8080';
// axios.defaults.withCredentials = true;

// interface MemberData {
//   name: string;
//   department: string;
//   year: number;
//   _id: string;
// }

// interface RegistrationData {
//   _id: string;
//   TeamName: string;
//   members: MemberData[];
//   college: string;
//   email: string;
//   mobile: number;
//   selectedEvents: string[];
// }

// export function GetRegistration({ onClose }: { onClose: () => void }) {
//   const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
//   const [filteredRegistrations, setFilteredRegistrations] = useState<RegistrationData[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedEvent, setSelectedEvent] = useState<string>('All');
//   const [events, setEvents] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchRegistrations = async () => {
//       try {
//         const response = await axios.get<RegistrationData[]>('https://abhiyantrixbackend.onrender.com/api/registration', {
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//           },
//         });
        
//         if (response.status !== 200) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = response.data;
//         if (!Array.isArray(data)) {
//           throw new Error('Data is not in the expected format');
//         }

//         setRegistrations(data);
//         setFilteredRegistrations(data);
        
//         // Extract unique events
//         const allEvents = data.flatMap(reg => reg.selectedEvents);
//         const uniqueEvents = Array.from(new Set(allEvents));
//         setEvents(['All', ...uniqueEvents]);
        
//         setIsLoading(false);
//       } catch (err) {
//         console.error('Error fetching registrations:', err);
//         setError(`Failed to fetch registrations. ${err instanceof Error ? err.message : 'Unknown error occurred.'}`);
//         setIsLoading(false);
//       }
//     };

//     fetchRegistrations();
//   }, []);

//   useEffect(() => {
//     if (selectedEvent === 'All') {
//       setFilteredRegistrations(registrations);
//     } else {
//       const filtered = registrations.filter(reg => 
//         reg.selectedEvents.includes(selectedEvent)
//       );
//       setFilteredRegistrations(filtered);
//     }
//   }, [selectedEvent, registrations]);

//   const handleDownloadExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(
//       filteredRegistrations.map(reg => ({
//         'Team Name': reg.TeamName,
//         'College': reg.college,
//         'Email': reg.email,
//         'Mobile': reg.mobile,
//         'Selected Events': reg.selectedEvents.join(', '),
//         ...reg.members.reduce((acc, member, index) => ({
//           ...acc,
//           [`Member ${index + 1} Name`]: member.name,
//           [`Member ${index + 1} Department`]: member.department,
//           [`Member ${index + 1} Year`]: member.year,
//         }), {})
//       }))
//     );
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');
//     XLSX.writeFile(workbook, `registrations_${selectedEvent}.xlsx`);
//   };

//   const handleDownloadPDF = () => {
//     const doc = new jsPDF();
//     doc.autoTable({
//       head: [['Team Name', 'Members', 'College', 'Email', 'Mobile', 'Selected Events']],
//       body: filteredRegistrations.map(reg => [
//         reg.TeamName,
//         reg.members.map(m => `${m.name} (${m.department}, Year ${m.year})`).join('\n'),
//         reg.college,
//         reg.email,
//         reg.mobile,
//         reg.selectedEvents.join(', ')
//       ]),
//     });
//     doc.save(`registrations_${selectedEvent}.pdf`);
//   };

//   const getMaxMembers = () => {
//     return Math.max(...filteredRegistrations.map(reg => reg.members.length), 0);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start z-50 p-4 overflow-y-auto">
//       <div className="bg-[#1a1f2e] rounded-lg p-4 md:p-8 w-full max-w-[95vw] md:max-w-7xl my-4">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//           <h2 className="text-2xl font-bold text-blue-400">Registrations</h2>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center gap-2">
//               <Filter className="w-4 h-4 text-gray-400" />
//               <select
//                 value={selectedEvent}
//                 onChange={(e) => setSelectedEvent(e.target.value)}
//                 className="bg-[#2a2f3e] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
//               >
//                 {events.map((event) => (
//                   <option key={event} value={event}>
//                     {event}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               onClick={handleDownloadExcel}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
//               disabled={filteredRegistrations.length === 0}
//             >
//               <Download className="w-4 h-4" />
//               Download Excel
//             </button>
//             <button
//               onClick={handleDownloadPDF}
//               className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
//               disabled={filteredRegistrations.length === 0}
//             >
//               <Download className="w-4 h-4" />
//               Download PDF
//             </button>
//             <button
//               onClick={onClose}
//               className="text-gray-400 hover:text-white transition-colors"
//               aria-label="Close registrations"
//             >
//               <X className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
        
//         {isLoading ? (
//           <p className="text-gray-300">Loading registrations...</p>
//         ) : error ? (
//           <p className="text-red-400">{error}</p>
//         ) : filteredRegistrations.length === 0 ? (
//           <p className="text-gray-300">No registrations found for the selected event.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-[#1d2433]">
//                   <th className="sticky left-0 bg-[#1d2433] py-3 px-4 text-blue-400 font-semibold">Team Name</th>
//                   {[...Array(getMaxMembers())].map((_, i) => (
//                     <th key={`member-${i}`} className="py-3 px-4 text-blue-400 font-semibold whitespace-nowrap">
//                       Member {i + 1}
//                     </th>
//                   ))}
//                   <th className="py-3 px-4 text-blue-400 font-semibold whitespace-nowrap">College</th>
//                   <th className="py-3 px-4 text-blue-400 font-semibold whitespace-nowrap">Email</th>
//                   <th className="py-3 px-4 text-blue-400 font-semibold whitespace-nowrap">Mobile</th>
//                   <th className="py-3 px-4 text-blue-400 font-semibold whitespace-nowrap">Selected Events</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredRegistrations.map((reg) => (
//                   <tr key={reg._id} className="border-b border-gray-800 hover:bg-[#1d2433]/50">
//                     <td className="sticky left-0 bg-[#1a1f2e] py-3 px-4 text-gray-300 font-medium text-sm">
//                       {reg.TeamName}
//                     </td>
//                     {[...Array(getMaxMembers())].map((_, i) => (
//                       <td key={`member-${i}`} className="py-3 px-4 text-gray-300">
//                         {reg.members[i] ? (
//                           <div className="whitespace-nowrap text-xs">
//                             <div className="font-medium">{reg.members[i].name}</div>
//                             <div className="text-gray-400">
//                               {reg.members[i].department}, Year {reg.members[i].year}
//                             </div>
//                           </div>
//                         ) : null}
//                       </td>
//                     ))}
//                     <td className="py-3 px-4 text-gray-300 whitespace-nowrap text-xs">{reg.college}</td>
//                     <td className="py-3 px-4 text-gray-300 whitespace-nowrap text-xs">{reg.email}</td>
//                     <td className="py-3 px-4 text-gray-300 whitespace-nowrap text-xs">{reg.mobile}</td>
//                     <td className="py-3 px-4 text-gray-300 whitespace-nowrap text-xs">{reg.selectedEvents.join(', ')}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

