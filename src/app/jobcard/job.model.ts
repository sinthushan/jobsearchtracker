import { Timestamp } from "rxjs";

export interface Job{
    id: number;
    user: string;
    jobTitle : string;
    company: string;
    stages: Stage[];
    comment: string;
}

export interface Stage{
    stage: string;
    date: string;
    interviewDetails?: Interview;
}

export interface Interview{
    date: string;
    time: string
    location: string;
    notes: string;
}