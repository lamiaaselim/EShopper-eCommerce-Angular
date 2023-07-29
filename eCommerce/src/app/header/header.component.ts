import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isCategoriesOpen = true;
  isNavbarHovered = false;
  currentIndex = 0;

  // Define an array of carousel images
  carouselImages = [
    '../../assets/images/carousel-1.jpg',
    '../../assets/images/carousel-2.jpg'
    // Add more image paths if needed
  ];
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.toggleNavbarMethod();
  }

  onDropdownMouseOver() {
    if (window.innerWidth > 992) {
      this.isNavbarHovered = true;
    }
  }

  onDropdownMouseOut() {
    if (window.innerWidth > 992) {
      this.isNavbarHovered = false;
    }
  }

  toggleNavbarMethod() {
    if (window.innerWidth > 992) {
      this.isNavbarHovered = false;
    }
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }
}
