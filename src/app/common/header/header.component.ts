import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menus: any[] = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About',
      link: '/about',
    },
    {
      title: 'Products',
      link: '/products',
      children: [
        {
          title: 'Submenu 1',
          link: '/submenu1',
        },
        {
          title: 'Submenu 2',
          link: '/submenu2',
        },
      ],
    },
    {
      title: 'Contact',
      link: '/contact',
    },
    {
      title: 'Cart',
      link: '/cart',
    },
  ]
}
