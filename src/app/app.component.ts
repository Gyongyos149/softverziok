import { Component } from '@angular/core';
import { VerziokComponent } from "./verziok/verziok.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VerziokComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'softverziok';
}
