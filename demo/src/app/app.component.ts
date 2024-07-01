import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Author, authors } from './authors';
import { AuthorListComponent } from './author-list/author-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AuthorListComponent],
  templateUrl: './app.component.htm',
  styleUrl: './app.component.css',
})
export class AppComponent {
 authors = authors;
}
