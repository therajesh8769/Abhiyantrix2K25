'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { X, Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

interface MemberData {
  name: string;
  department: string;
  year: number;
}

interface RegistrationData {
  _id: string;
  TeamName: string;
  members: MemberData[];
  college: string;
  email: string;
  mobile: number;
}

export function GetRegistration({ onClose }: { onClose: () => void }) {
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get<RegistrationData[]>('/api/registration');
        setRegistrations(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching registrations:', err);
        setError('Failed to fetch registrations. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      registrations.map(reg => ({
        'Team Name': reg.TeamName,
        'College': reg.college,
        'Email': reg.email,
        'Mobile': reg.mobile,
        ...reg.members.reduce((acc, member, index) => ({
          ...acc,
          [`Member ${index + 1} Name`]: member.name,
          [`Member ${index + 1} Department`]: member.department,
          [`Member ${index + 1} Year`]: member.year,
        }), {})
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');
    XLSX.writeFile(workbook, 'registrations.xlsx');
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['Team Name', 'Members', 'College', 'Email', 'Mobile']],
      body: registrations.map(reg => [
        reg.TeamName,
        reg.members.map(m => `${m.name} (${m.department}, Year ${m.year})`).join('\n'),
        reg.college,
        reg.email,
        reg.mobile
      ]),
    });
    doc.save('registrations.pdf');
  };

  const getMaxMembers = () => {
    return Math.max(...registrations.map(reg => reg.members.length));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start z-50 p-4 overflow-y-auto">
      <div className="bg-[#1a1f2e] rounded-lg p-4 md:p-8 w-full max-w-[95vw] md:max-w-7xl my-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-blue-400">Registrations</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDownloadExcel}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              Download Excel
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close registrations"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {isLoading ? (
          <p className="text-gray-300">Loading registrations...</p>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1d2433]">
                  <th className="sticky left-0 bg-[#1d2433] py-3 px-4 text-blue-400 font-semibold">Team Name</th>
                  {[...Array(getMaxMembers())].map((_, i) => (
                    <th key={`member-${i}`} className="py-3 px-4 text-blue-400 font-semibold whitespace-nowrap">
                      Member {i + 1}
                    </th>
                  ))}
                  <th className="py-3 px-4 text-blue-400 font-semibold whitespace-nowrap">College</th>
                  <th className="py-3 px-4 text-blue-400 font-semibold whitespace-nowrap">Email</th>
                  <th className="py-3 px-4 text-blue-400 font-semibold whitespace-nowrap">Mobile</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg) => (
                  <tr key={reg._id} className="border-b border-gray-800 hover:bg-[#1d2433]/50">
                    <td className="sticky left-0 bg-[#1a1f2e] py-3 px-4 text-gray-300 font-medium text-sm">
                      {reg.TeamName}
                    </td>
                    {[...Array(getMaxMembers())].map((_, i) => (
                      <td key={`member-${i}`} className="py-3 px-4 text-gray-300">
                        {reg.members[i] ? (
                          <div className="whitespace-nowrap text-xs">
                            <div className="font-medium">{reg.members[i].name}</div>
                            <div className="text-gray-400">
                              {reg.members[i].department}, Year {reg.members[i].year}
                            </div>
                          </div>
                        ) : null}
                      </td>
                    ))}
                    <td className="py-3 px-4 text-gray-300 whitespace-nowrap text-xs">{reg.college}</td>
                    <td className="py-3 px-4 text-gray-300 whitespace-nowrap text-xs">{reg.email}</td>
                    <td className="py-3 px-4 text-gray-300 whitespace-nowrap text-xs">{reg.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

