import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwimlaneComponent } from "./swimlane/swimlane.component";
import { JobService } from './jobcard/job.service';
import { Job } from './jobcard/job.model';
import { JobcardComponent } from "./jobcard/jobcard.component";
import { FormsModule } from '@angular/forms';
import { NextphaseComponent } from "./jobcard/nextphase/nextphase.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwimlaneComponent, JobcardComponent, FormsModule, NextphaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {


  title = 'jobsearchtracker';
  private jobservice = inject(JobService);
  jobs = this.jobservice.allJobs;
  user = '1'
  newJobTitle = signal('');
  newJobCompany = signal('');
  newJobComment = signal('');


  onSubmit() {
    console.log("yo")
    this.jobservice.addJOb({
      jobTitle: this.newJobTitle(),
      company: this.newJobCompany(),
      comment: this.newJobComment()
    })
    this.newJobTitle.set('');
    this.newJobCompany.set('');
    this.newJobComment.set('');
  }

  


}
