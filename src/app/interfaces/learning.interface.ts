import { Speciality } from "./speciality.interface";
import { Module } from "./module.interface";


export interface Learning {

    id: number;
    title:string;
    description: string;
    type: string;
    attribute: string;
    specialities: string;
    module: string;
    image: string;
    learningCenterName: string;
}
