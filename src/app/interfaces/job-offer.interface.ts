import { Speciality } from "./speciality.interface";

export interface JobOffer {

    id: number;
    title:string;
    salary: number;
    startingDate: string;
    contractType: string;
    benefits: string;
    workingHours: string;
    requireProfile: string;
    learningCenterName: string;
    learningCenterImage: string;
    specialities: string

}

