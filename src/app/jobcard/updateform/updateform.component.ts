import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updateform.component.html',
  styleUrl: './updateform.component.css'
})
export class UpdateformComponent {

  newStatus = signal('');

  onSubmit() {
    console.log(this.newStatus())
  }

}
