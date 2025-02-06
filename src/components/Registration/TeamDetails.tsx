// import React from 'react';
// import { FormInput } from './FormInput';
// import { RegistrationFormData, FormErrors } from './types';

// interface TeamDetailsProps {
//   formData: RegistrationFormData;
//   setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>;
//   errors: FormErrors;
// }

// export function TeamDetails({ formData, setFormData, errors }: TeamDetailsProps) {
//   return (
//     <div className="space-y-4">
//       <FormInput
//         label="Team Name"
//         value={formData.TeamName}
//         onChange={(e) => setFormData({ ...formData, TeamName: e.target.value })}
//         error={errors.TeamName}
//         placeholder="Enter your team name"
//       />
//       <FormInput
//         label="College"
//         value={formData.college}
//         onChange={(e) => setFormData({ ...formData, college: e.target.value })}
//         error={errors.college}
//         placeholder="Enter your college name"
//       />
//     </div>
//   );
// }