import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoLifecycleComponentComponent } from './demo-lifecycle-component/demo-lifecycle-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DemoLifecycleComponentComponent],
templateUrl: './app.component.htm',
  styleUrl: './app.component.css'
})
export class AppComponent {
  so_san_pham = 1;
  update(){
    this.so_san_pham++;
  }
}
