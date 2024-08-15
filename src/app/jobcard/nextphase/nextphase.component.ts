import { Component, EventEmitter, inject, input, Output } from '@angular/core';
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
  @Output() unhideModal = new EventEmitter<void>()
  onClick($event: MouseEvent) {
    this.unhideModal.emit()
    //this.jobservice.changeStatus(this.jobID()!, "Changed")
  }

}
