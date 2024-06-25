
// employee-request.model.ts

export enum Departure {
    DECES = 'DECES',
    DEMISSION = 'DEMISSION',
    RETRAITE = 'RETRAITE',
    REVOCATION = 'REVOCATION'
  }
  
  export enum Displine {
    BLAME = 'BLAME',
    AVERTISSEMENT = 'AVERTISSEMENT',
    REVOCATION = 'REVOCATION'
  }
  
  export enum LeaveType {
    MALADIE = 'MALADIE',
    LONG_DUREE = 'LONG_DUREE',
    MATERNITE = 'MATERNITE'
  }
  export enum Gender {
    Homme = 'Homme',
    Femme = 'Femme',
  }

  export interface employer { 
    id?: number;
    firstName?: string;
    lastName?: string;
    position?: string;
    age?: number;
    salary?: number;
    gender?: Gender;
    departure?: Departure;
    displine?: Displine;
    leaveType?: LeaveType;
    startDate?: Date; 
    endDate?: Date; 
  
  }
  

