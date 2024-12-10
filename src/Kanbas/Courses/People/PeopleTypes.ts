export interface UserDetails {
    _id?: string;
    firstName: string;
    lastName: string;
    username: string;
    password?: string;
    email: string;
    role: string;
    section: string;
    loginId?: string;
    lastActivity?: Date;
    totalActivity?: string;
  }

  export {}

  export interface UserTable {
    _id: string;
    firstName: string;
    lastName: string;
    loginId: string;
    section: string;
    role: string;
    lastActivity: string;
    totalActivity: string;
  }

  export {}