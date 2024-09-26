import { Component } from '@angular/core';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent {
  
  currentIndex = 0;

  
  carouselItems = [
    {
      img: 'poco.png',
      title: 'Poco X6 PRO',
      description: 'Flow AMOLED CrystalRes de 120Hz'
    },
    {
      img: '2.png',
      
    },
    
  ];

  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }
}
