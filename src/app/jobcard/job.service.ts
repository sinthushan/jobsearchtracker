import { Injectable } from "@angular/core";
import { Job } from "./job.model";



@Injectable({providedIn: "root"})
export class JobService{
    jobs: Job[] = []
    

    getJobs(user: string): Job[]{
        return this.jobs.filter(job => job.user = user)
    }

    addJOb(job: Job){
        this.jobs.push(job)
    }

    changeStatus(jobID: number, stage: string){
       const index =  this.jobs.findIndex(job => job.id == jobID)
       this.jobs[index].stages.push({stage: stage, date: 'date' }) 
    }

}

