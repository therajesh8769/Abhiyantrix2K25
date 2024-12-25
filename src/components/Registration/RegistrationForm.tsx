import React, { useState } from 'react';
import { TeamDetails } from './TeamDetails';
import { MemberDetails } from './MemberDetails';
import { ContactDetails } from './ContactDetails';
import { validateForm } from './Validations';
import { RegistrationFormData, FormErrors } from './types';
import axios from "axios";

export function RegistrationForm({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegistrationFormData>({
    TeamName: '',
    members: [{ name: '', department: '', year: '' }],
    college: '',
    email: '',
    mobile: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleNext = () => {
    const stepErrors = validateForm(formData, currentStep);
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep(prev => prev + 1);
      setErrors({});
    } else {
      setErrors(stepErrors);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm(formData,3);
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("https://abhiyantrixbackend.onrender.com/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log("Form submitted successfully:", result);
          setSuccessMessage(result.message); // Set the success message
        } else {
          const error = await response.json();
          console.error("Error submitting form:", error);
          if (error.message.includes('already registered')) {
            setErrors({ server: error.message });
          } else {
            setErrors({ server: "An unexpected error occurred." });
          }
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setErrors({ server: "Please enter valid Email or mobile no." });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm">
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="relative w-full max-w-2xl">
          {/* Space-themed background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-lg blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/40 to-blue-900/40 rounded-lg" />
          
          <div className="relative bg-black/60 backdrop-blur-md rounded-lg p-6 border border-blue-500/30">
            {successMessage ? (
              <div className="text-center text-blue-400">
                <h2 className="text-3xl font-orbitron mb-4">Registration Successful!</h2>
                <p className="text-lg">{successMessage}</p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full
                             transition-all duration-300"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  ×
                </button>

                <h2 className="text-2xl font-orbitron text-blue-400 mb-6 text-center">
                  Join the Mission
                </h2>

                <div className="space-y-8">
                  {currentStep === 1 && (
                    <TeamDetails
                      formData={formData}
                      setFormData={setFormData}
                      errors={errors}
                    />
                  )}
                  {currentStep === 2 && (
                    <MemberDetails
                      formData={formData}
                      setFormData={setFormData}
                      errors={errors}
                    />
                  )}
                  {currentStep === 3 && (
                    <ContactDetails
                      formData={formData}
                      setFormData={setFormData}
                      errors={errors}
                    />
                  )}

                  {errors.server && (
                    <div className="text-red-500 text-center text-sm">
                      {errors.server}
                    </div>
                  )}

                  <div className="flex justify-between pt-4">
                    {currentStep > 1 && (
                      <button
                        onClick={handlePrevious}
                        className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-full
                                  transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50"
                      >
                        Previous
                      </button>
                    )}
                    {currentStep < 3 ? (
                      <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-full
                                  transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50
                                  ml-auto"
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full
                                  transition-all duration-300 ml-auto"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}