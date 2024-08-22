import { Injectable, signal } from "@angular/core";
import { Job, Stage } from "./job.model";



@Injectable({providedIn: "root"})
export class JobService{
    private jobs: Job[] = [];

    url = "http://127.0.0.1:8000/api/v1/jobs/"
    async getJobs(user: string): Promise<Job[]>{
        const data = await fetch(this.url);
        return await data.json() ?? []
    }

    addJOb(job: {jobTitle : string; company: string; comment: string;}){
        let stage: Stage = {
            stage: 'applied'

        }
        let newJob: Job = {
            id: Math.random(),
            applicant:  '1',
            title : job.jobTitle,
            company: job.company,
            stages: [stage],

        }
        this.jobs.push(newJob)

    }

    changeStatus(jobID: number, stage: string){
        console.log(this.jobs)
        const index =  this.jobs.findIndex(job => job.id == jobID)
        console.log(index)
        console.log(this.jobs[index])
        this.jobs[index].stages.push({stage: stage }) 
    }

}

