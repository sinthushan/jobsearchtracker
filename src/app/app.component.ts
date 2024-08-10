import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwimlaneComponent } from "./swimlane/swimlane.component";
import { JobService } from './jobcard/job.service';
import { Job } from './jobcard/job.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwimlaneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jobsearchtracker';
  jobs: Job[] = []
  user = '1'
  constructor(public jobservice: JobService){
    this.jobs =  jobservice.getJobs(this.user)
  }


}
