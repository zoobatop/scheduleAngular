import { Component } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { PoNavbarModule, PoNavbarItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    PoNavbarModule,
    PoModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  navbarItem: Array<PoNavbarItem> = [
    {
      label: "Home",
      link: '/home'
    },
    {
      label: "Agenda",
      link: '/schedule'
    },
    {
      label: "Client",
      link: '/customer'
    },
    {
      label: "Report",
      link: '/report'
    },
    {
      label: "Panel",
      link: '/dashboard'
    },
    {
      label: "User",
      link: '/user'
    }
  ];
}
