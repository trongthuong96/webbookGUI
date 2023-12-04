import { Component, OnInit, inject } from '@angular/core';
import { BookShow } from '../models/book/book.show';
import { BookService } from '../services/book.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [BookService]
})
export class HomeComponent implements OnInit{

  bookService = inject(BookService);
  
  book: BookShow | undefined ;

  // constructor(
  //   private bookService: BookService
  // ) {}

  

  ngOnInit(): void {
    this.GetBookById(1);
  }

  GetBookById(id: number): void {
    this.bookService.GetBookById(id).subscribe((book) => {
      //if (isPlatformServer(2)) {
        this.book = book;
      //}
      
    });

    // this.bookService.GetBookById(id).then((book) => {
    //   this.book = book;
    // });
  }
}
