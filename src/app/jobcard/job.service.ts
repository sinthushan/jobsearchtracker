import { Injectable, signal } from "@angular/core";
import { Job, Stage } from "./job.model";



@Injectable({providedIn: "root"})
export class JobService{
    private jobs = signal<Job[]>([]);
    allJobs = this.jobs.asReadonly()

    getJobs(user: string): Job[]{
        return this.jobs().filter(job => job.user = user)
    }

    addJOb(job: {jobTitle : string; company: string; comment: string;}){
        let stage: Stage = {
            stage: 'applied',
            date: Date.now().toString(),
        }
        let newJob: Job = {
            id: Math.random(),
            user:  '1',
            jobTitle : job.jobTitle,
            company: job.company,
            stages: [stage],
            comment: job.comment
        }
        this.jobs().push(newJob)

    }

    changeStatus(jobID: number, stage: string){
        console.log(this.jobs())
        const index =  this.jobs().findIndex(job => job.id == jobID)
        console.log(index)
        console.log(this.jobs()[index])
        this.jobs()[index].stages.push({stage: stage, date: 'date' }) 
    }

}

