import { Component, ElementRef, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'dialog[jobUpdate]',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updateform.component.html',
  styleUrl: './updateform.component.css'
})
export class UpdateformComponent {

  newStatus = signal('');
  private jobservice = inject(JobService);
  jobID = input<number>();
  
  constructor(private elementRef: ElementRef) {}

  public get dialog(): HTMLDialogElement {
    return (this.elementRef.nativeElement as HTMLDialogElement);
  }

  updateStatus() {
    this.dialog.close()
    this.jobservice.changeStatus((this.jobID() as number),this.newStatus())

  }

}
