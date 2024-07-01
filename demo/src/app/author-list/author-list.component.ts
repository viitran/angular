import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author, authors } from '../authors';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './author-list.component.htm',
  styleUrl: './author-list.component.css',
})
export class AuthorListComponent implements OnInit {
  @Input() authors: Author[] = authors;
  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
