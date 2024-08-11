import { Component, input } from '@angular/core';
import { JobService } from './job.service';
import { Job } from './job.model';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-jobcard',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './jobcard.component.html',
  styleUrl: './jobcard.component.css'
})
export class JobcardComponent {
  job = input<Job>();
  status = input<string>(); 
  
}
