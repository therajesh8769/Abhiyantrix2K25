export const validateForm = (formData: any, step: number) => {
    const errors: { [key: string]: string } = {};
  
    if (step === 1) {
      if (!formData.TeamName?.trim()) {
        errors.TeamName = 'Team name is required';
      }
      if (!formData.college?.trim()) {
        errors.college = 'College name is required';
      }
    }
  
    if (step === 2) {
      formData.members.forEach((member: any, index: number) => {
        if (!member.name?.trim()) {
          errors[`members.${index}.name`] = 'Name is required';
        }
        if (!member.department?.trim()) {
          errors[`members.${index}.department`] = 'Department is required';
        }
        if (!member.year) {
          errors[`members.${index}.year`] = 'Year is required';
        } else if (isNaN(member.year) || member.year < 1 || member.year > 5) {
          errors[`members.${index}.year`] = 'Year must be between 1 and 5';
        }
      });
    }
  
    if (step === 3) {
      if (!formData.email?.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Invalid email format';
      }
  
      if (!formData.mobile?.trim()) {
        errors.mobile = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobile)) {
        errors.mobile = 'Mobile number must be 10 digits';
      }
    }
  
    return errors;
  };