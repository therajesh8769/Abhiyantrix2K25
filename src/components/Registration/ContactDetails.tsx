import React from 'react';
import { FormInput } from './FormInput';
import { RegistrationFormData, FormErrors } from './types';

interface ContactDetailsProps {
  formData: RegistrationFormData;
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormData>>;
  errors: FormErrors;
}

export function ContactDetails({ formData, setFormData, errors }: ContactDetailsProps) {
  return (
    <div className="space-y-4">
      <FormInput
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={errors.email}
        placeholder="Enter your email"
      />
      <FormInput
        label="Mobile"
        type="tel"
        value={formData.mobile}
        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        error={errors.mobile}
        placeholder="Enter your mobile number"
      />
    </div>
  );
}