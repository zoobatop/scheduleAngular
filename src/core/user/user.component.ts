import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageModule, PoButtonModule } from '@po-ui/ng-components';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { InfoHeroComponent } from '../../shared/components/info-hero/info-hero.component';
import { UserService } from './services/user.service';
import { firstValueFrom } from 'rxjs';
import { UserProfile } from './models/user-profile';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule, 
    PoButtonModule, 
    PoPageModule, 
    NavbarComponent, 
    InfoHeroComponent
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userProfile: UserProfile = {} as UserProfile;

  constructor(private userService: UserService) {}

  async ngOnInit() {
    await this.catchProfile();
  }

  private async catchProfile() {
    let id: string | null = localStorage.getItem('id');

    if (id !== null) {
      this.userProfile = await firstValueFrom(this.userService.getProfile(parseInt(id)));
      console.table(this.userProfile);
    }
  }
}
