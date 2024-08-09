import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwimlaneComponent } from "./swimlane/swimlane.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwimlaneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jobsearchtracker';
}
