export interface Assignment {
    _id: string;
    title: string;
    description?: string;
    points?: number;
    assignTo?: string;
    dueDate?: string;
    availableFrom?: string;
    availableUntil?: string;
    course?: string;
  }
  
  export {}