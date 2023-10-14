import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  currentIndex = 0;
// Define an array of carousel images
carouselImages = [
  '../../assets/images/carousel-1.jpg',
  '../../assets/images/carousel-2.jpg'
  // Add more image paths if needed
];
  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }
}
