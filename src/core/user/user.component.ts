import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { InfoHeroComponent } from '../../shared/components/info-hero/info-hero.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [PoPageModule, NavbarComponent, InfoHeroComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
