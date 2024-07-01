import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.htm',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-rest-api';
}
