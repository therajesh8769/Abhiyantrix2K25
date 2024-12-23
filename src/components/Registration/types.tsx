export interface Member {
    name: string;
    department: string;
    year: string | number;
  }
  
  export interface RegistrationFormData {
    TeamName: string;
    members: Member[];
    college: string;
    email: string;
    mobile: string;
  }
  
  export interface FormErrors {
    [key: string]: string;
  }