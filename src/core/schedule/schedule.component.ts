import { Component } from '@angular/core';
import { PoPageModule, PoButtonModule } from '@po-ui/ng-components';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { InfoHeroComponent } from '../../shared/components/info-hero/info-hero.component';
import { TableComponent } from '../../shared/components/table/table.component';
import { PoTableColumn } from '@po-ui/ng-components';
import { columnAgenda } from './models/columnAgenda.interface';

@Component({
  selector: 'schedule',
  standalone: true,
  imports: [
    PoPageModule, 
    NavbarComponent, 
    InfoHeroComponent, 
    TableComponent
  ],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {

  readonly consultants: Array<PoTableColumn> = columnAgenda;
  events  = [
    { date: '25/09/2024', consultant1: 'Meeting', consultant2: 'Call', consultant3: 'Review' },
    { date: '26/09/2024', consultant1: 'Workshop', consultant2: 'Presentation', consultant3: 'Training' }
  ];
  
}
