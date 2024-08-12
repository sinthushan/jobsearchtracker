import { Component, inject, input } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-nextphase',
  standalone: true,
  imports: [],
  templateUrl: './nextphase.component.html',
  styleUrl: './nextphase.component.css'
})
export class NextphaseComponent {
  private jobservice = inject(JobService);
  jobID = input<number>();
  onClick($event: MouseEvent) {
    this.jobservice.changeStatus(this.jobID()!, "Changed")
  }

}
