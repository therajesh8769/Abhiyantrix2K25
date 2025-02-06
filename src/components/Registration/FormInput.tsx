// import React from 'react';

// interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   label: string;
//   error?: string;
// }

// export function FormInput({ label, error, ...props }: FormInputProps) {
//   return (
//     <div>
//       <label className="block text-blue-400 text-sm mb-1">{label}</label>
//       <input
//         {...props}
//         className={`w-full bg-black/50 border ${
//           error ? 'border-red-500' : 'border-blue-500/30'
//         } rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500
//         transition-colors`}
//       />
//       {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
//     </div>
//   );
// }