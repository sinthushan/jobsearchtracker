export interface Job{
    id: number;
    applicant: string;
    title : string;
    company: string;
    stages: Stage[];
    applied_date?: string;
    modefied_date?: string;
}

export interface Stage{
    stage: string;
    round?: number;
    comment?: string;
}

export interface Interview{
    date: string;
    time: string
    location: string;
    notes: string;
}