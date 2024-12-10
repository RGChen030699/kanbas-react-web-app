export interface AssignmentControl {
    _id: string;
    title: string;
    course: string;
    description: string;
    points: number;
    dueDate: string;
    availableFrom: string;
    availableUntil: string;
    group: string;
    submissionType: string;
  }

  export {}


  export interface AssignmentForm {
    title: string;
    description: string;
    points: number;
    dueDate: string;
    availableFromDate: string;
    availableUntilDate: string;
  }
  
  export {}

  
  export interface Assignments {
    _id: string;
    title: string;
    course: string;
    description?: string;
    points?: number;
    dueDate?: string;
  }
  
  export {}