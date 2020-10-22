import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('mobileNav', { static: false }) mobileNav;

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    this.mobileNav.nativeElement.style.display = 'block';
  }

  closeNav() {
    this.mobileNav.nativeElement.style.display = 'none';
  }

}
