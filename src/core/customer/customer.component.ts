import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { InfoHeroComponent } from '../../shared/components/info-hero/info-hero.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [PoPageModule, NavbarComponent, InfoHeroComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
