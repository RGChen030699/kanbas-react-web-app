export interface DashboardCourse {
    _id: string;
    name: string;
    number: string;
    description: string;
  }
  
  export{}

export interface DashboardCourseList {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    department?: string;
    credits?: number;
  }

  export {}

  export interface Enrollment {
    _id: string;
    user: string;
    course: string;
  }
  
  export interface EnrollmentState {
    enrollments: Enrollment[];
    showAllCourses: boolean;
  }