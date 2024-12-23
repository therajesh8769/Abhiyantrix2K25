import React from 'react';
import { FormInput } from './FormInput';
import { RegistrationFormData, FormErrors } from './types';
import { Plus, Minus } from 'lucide-react';

interface MemberDetailsProps {
  formData: RegistrationFormData;
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>;
  errors: FormErrors;
}

export function MemberDetails({ formData, setFormData, errors }: MemberDetailsProps) {
  const addMember = () => {
    if (formData.members.length < 4) {
      setFormData({
        ...formData,
        members: [...formData.members, { name: '', department: '', year: '' }]
      });
    }
  };

  const removeMember = (index: number) => {
    if (formData.members.length > 1) {
      setFormData({
        ...formData,
        members: formData.members.filter((_, i) => i !== index)
      });
    }
  };

  const updateMember = (index: number, field: string, value: string) => {
    const newMembers = [...formData.members];
    newMembers[index] = { ...newMembers[index], [field]: value };
    setFormData({ ...formData, members: newMembers });
  };

  return (
    <div className="space-y-6">
      {formData.members.map((member, index) => (
        <div key={index} className="relative p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
          <h3 className="text-blue-400 mb-4">Member {index + 1}</h3>
          <div className="space-y-4">
            <FormInput
              label="Name"
              value={member.name}
              onChange={(e) => updateMember(index, 'name', e.target.value)}
              error={errors[`members.${index}.name`]}
              placeholder="Enter member name"
            />
            <FormInput
              label="Department"
              value={member.department}
              onChange={(e) => updateMember(index, 'department', e.target.value)}
              error={errors[`members.${index}.department`]}
              placeholder="Enter department"
            />
            <FormInput
              label="Year"
              type="number"
              value={member.year.toString()}
              onChange={(e) => updateMember(index, 'year', e.target.value)}
              error={errors[`members.${index}.year`]}
              placeholder="Enter year"
            />
            {formData.members.length > 1 && (
              <button
                onClick={() => removeMember(index)}
                className="absolute top-4 right-4 p-1 text-red-400 hover:text-red-300 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ))}
      
      {formData.members.length < 4 && (
        <button
          onClick={addMember}
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Member</span>
        </button>
      )}
    </div>
  );
}