import { Component } from '@angular/core';
import { PoPageModule, PoButtonModule } from '@po-ui/ng-components';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { InfoHeroComponent } from '../../shared/components/info-hero/info-hero.component';
import { UserService } from './services/user.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [PoButtonModule, PoPageModule, NavbarComponent, InfoHeroComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(
    private userService: UserService
  ) {}
  
  async catchProfile() {
    let id: string | null = localStorage.getItem('id')

    if (id !== null) {
      const response = await firstValueFrom(this.userService.getProfile(parseInt(id)))
      console.table(response);
    }
  }
  
}