import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isCategoriesOpen = true;
  isNavbarHovered = false;

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

}
