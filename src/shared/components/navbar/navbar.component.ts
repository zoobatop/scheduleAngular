import { Component } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { PoNavbarModule, PoNavbarItem, PoNavbarIconAction } from '@po-ui/ng-components';

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
  navbarAction: Array<PoNavbarIconAction> = [
    {
      label: "Config",
      icon: 'ph ph-gear-six',
      link: '/config'
    }
  ]

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
