import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwimlaneComponent } from "./swimlane/swimlane.component";
import { JobService } from './jobcard/job.service';
import { Job } from './jobcard/job.model';
import { JobcardComponent } from "./jobcard/jobcard.component";
import { FormsModule } from '@angular/forms';
import { NextphaseComponent } from "./jobcard/nextphase/nextphase.component";
import { UpdateformComponent } from "./jobcard/updateform/updateform.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwimlaneComponent, JobcardComponent, FormsModule, NextphaseComponent, UpdateformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  


  title = 'jobsearchtracker';
  private jobservice = inject(JobService);
  jobs: Job[] = []
  user = '1'
  newJobTitle = signal('');
  newJobCompany = signal('');
  newJobComment = signal('');
  
  

  @ViewChild(UpdateformComponent) updateModal!: UpdateformComponent;
  
  newStatus = signal('');
  jobID= signal(0);


  constructor(){
     this.jobservice.getJobs("1").then((jobs) => this.jobs = jobs)
  }

  onSubmit() {
    this.jobservice.addJOb({
      jobTitle: this.newJobTitle(),
      company: this.newJobCompany(),
      comment: this.newJobComment()
    })
    this.newJobTitle.set('');
    this.newJobCompany.set('');
    this.newJobComment.set('');
  }

  unhideModal(job: number) {
    this.jobID.set(job)
    this.updateModal.dialog.showModal()
  }
  
 
}
