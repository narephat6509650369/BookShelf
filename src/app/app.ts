// src/app/app.ts
import { Component } from '@angular/core';
// ลบ RouterOutlet ออกถ้ายังไม่ใช้
// import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  imports: [], // ลบ RouterOutlet ออกจากตรงนี้ด้วย
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  isMenuOpen = false;
  currentBookIndex = 0;

  finishedBooks = [
    {
      title: 'แมวนักพยากรณ์ แห่งร้านกาแฟจันทร์เต็มดวง',
      author: 'Mai Mochizuki', 
      cover: '/images/prophet-cat.webp',
      status: 'Finished',
      pages: 212
    },
    {
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400',
      status: 'Finished',
      pages: 256
    },
    {
      title: 'Deep Work',
      author: 'Cal Newport',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
      status: 'Finished',
      pages: 304
    },
    {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
      status: 'Finished',
      pages: 499
    }
  ];

  get currentBook() {
    return this.finishedBooks[this.currentBookIndex];
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  nextBook(): void {
    this.currentBookIndex = (this.currentBookIndex + 1) % this.finishedBooks.length;
  }

  prevBook(): void {
    this.currentBookIndex = this.currentBookIndex === 0 
      ? this.finishedBooks.length - 1 
      : this.currentBookIndex - 1;
  }
}
