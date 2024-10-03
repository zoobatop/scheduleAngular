import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { InfoHeroComponent } from '../../shared/components/info-hero/info-hero.component';

@Component({
  selector: 'config',
  standalone: true,
  imports: [
    PoPageModule, 
    NavbarComponent, 
    InfoHeroComponent
  ],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css'
})
export class ConfigComponent {

}
