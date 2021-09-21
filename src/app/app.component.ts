import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'figma';

  brandNews = [
    {
      title:
        'WBFF-TV FOX Baltimore: Detail Garage Franchisees Share Tips To Ensure Your Car Is Ready for Road Trips',
    },
    {
      title:
        'Lessons From Franchise Executives: Jackie Bondanza of Hounds Town USA',
    },
    {
      title:
        'Authority Magazine: Chris DeJong Shares 5 Things He Wishes Someone Told Him Before He Became a Founder',
    },
    {
      title:
        'The Virginian-Pilot: Pool Scouts Featured for Partnership With Hope Floats',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    margin: 10,
    navSpeed: 700,
    animateOut: 'slideOutDown',
    animateIn: 'slideInDown',
    navText: [
      '<img src="assets/img/slider-left-arrow.png" width="7px" height="15px" alt="slider arrow"/>',
      '<img src="assets/img/slider-right-arrow.png" width="7px" height="15px" alt="slider arrow"/>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };
}
