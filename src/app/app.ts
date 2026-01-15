// src/app/app.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule], // เพิ่ม CommonModule เข้ามา
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
      title: 'CALL ME BY YOUR NAME',
      author: 'André Aciman',
      cover: '/images/callmebyyourname.jpg',
      status: 'Finished',
      pages: 248
    },
    {
      title: 'GOOD VIBES, GOOD LIFE',
      author: 'Vex King',
      cover: '/images/goodvibesgoodlife.jpg',
      status: 'Finished',
      pages: 222
    },
    {
      title: 'ทำไมเป็นคนแบบนี้ What Makes You You?',
      author: 'ท้อฟฟี่ แบรดชอว์',
      cover: '/images/whatmakeyouyou.jpg',
      status: 'Finished',
      pages: 280
    },
    {
      title: 'The Midnight Library',
      author: 'Matt Haig',
      cover: '/images/midnightlibrary.jpg',
      status: 'Finished',
      pages: 400
    },
    {
      title: 'เมษาลาตะวัน',
      author: 'September\'s Blue',
      cover: '/images/maysalatawan.webp',
      status: 'Finished',
      pages: 240
    },
    {
      title: 'White Nights',
      author: 'Fyodor Dostoevsky',
      cover: '/images/whitenights.jpg',
      status: 'Currently Reading',
      pages: 192
    },
    {
      title: 'สู้ดิวะ',
      author: 'กฤตไท ธนสมบัติกุล',
      cover: '/images/sudiva.jpg',
      status: 'Finished',
      pages: 200
    },
    {
      title: 'ไทม์ไลน์ที่สูญหาย เมื่อผมเล่าถึงคุณ',
      author: 'นิชตุล Shikak',
      cover: '/images/timeline.jpg',
      status: 'Finished',
      pages: 130
    },
    {
      title: 'ทุกคนมีจังหวะชีวิตเป็นของตัวเอง',
      author: 'วินนี่',
      cover: '/images/allpeople.jpg',
      status: 'Finished',
      pages: 174
    },
    {
      title: 'แค่สนิทกับตัวเองให้เป็น',
      author: 'คิดมาก',
      cover: '/images/justlivewithyourself.jpg',
      status: 'Finished',
      pages: 212
    },
    {
      title: 'EMOTIONAL FIRST AID ซ่อมแซมสุขที่สึกหรอ',
      author: 'กาย วินช์ (Guy Winch)',
      cover: '/images/emotionalfirstaid.jpg',
      status: 'Finished',
      pages: 408
    },
    {
      title: 'animalfarm',
      author: 'George Orwell',
      cover: '/images/animalfarm.jpg',
      status: 'Currently Reading',
      pages: 480
    },
    {
      title: 'ชีวิตเรามีแค่สี่พันสัปดาห์',
      author: 'Oliver Burkeman (โอลิเวอร์ เบอร์คีแมน)',
      cover: '/images/fourthousandweeks.jpg',
      status: 'Finished',
      pages: 236
    },
    {
      title: 'ทฤษฎีปล่อยเขา (The Let Them Theory)',
      author: 'เมล รอบบินส์ (Mel Robbins)',
      cover: '/images/letthem.jpg',
      status: 'Finished',
      pages: 432
    },
    {
      title: 'THINGS NO ONE TAUGHT US ABOUT LOVE เรื่องที่ไม่มีใครสอนเราเกี่ยวกับความรัก',
      author: 'Vex King',
      cover: '/images/thingsnoonetaughtusaboutlove.jpg',
      status: 'Finished',
      pages: 240
    },
    {
      title: 'ปีศาจตัวนั้น คือฉันเอง',
      author: 'May-I',
      cover: '/images/demon1.jpg',
      status: 'Finished',
      pages: 249
    },
    {
      title: 'ปีศาจตัวนั้น คือฉันเอง เล่ม 2',
      author: 'May-I',
      cover: '/images/demon2.jpg',
      status: 'To Read',
      pages: 243
    },
    {
      title: 'Somone Who Will Love You in All Your Damaged Glory',
      author: 'Raphael Bob-Waksberg',
      cover: '/images/someonewho.jpg',
      status: 'To Read',
      pages: 256
    },
    {
      title: 'มุมมองนักอ่านพระเจ้า เล่ม 1',
      author: 'sing N song',
      cover: '/images/godreader1.jpg',
      status: 'To Read',
      pages: 254
    },
    {
      title: 'A Little Life',
      author: 'Hanya Yanagihara',
      cover: '/images/alittlelife.jpg',
      status: 'Currently Reading',
      pages: 832
    },
    {
      title: 'Sound about ScruBB',
      author: 'จิราภรณ์ วิหวา',
      cover: '/images/scrubb.jpg',
      status: 'finished',
      pages: 336
    },
    {
      title: 'กาลครั้งหนึ่ง...ถึงเธอ',
      author: 'นักสะสมผีเสื้อ',
      cover: '/images/justoneandonly.jpg',
      status: 'finished',
      pages: 236
    },
    {
      title: 'Everything I know About Love',
      author: 'Dolly Alderton',
      cover: '/images/everythingiknowaboutlove.jpg',
      status: 'finished',
      pages: 368
    },
    {
      title: 'เดนดาว NEVER DIE',
      author: 'จิตจงกล',
      cover: '/images/naverdie.jpg',
      status: 'finished',
      pages: 369
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

  getStatusClass(status: string): string {
    const statusLower = status.toLowerCase();
    if (statusLower === 'finished') return 'status-finished';
    if (statusLower === 'currently reading') return 'status-reading';
    if (statusLower === 'to read') return 'status-toread';
    return '';
  }
}