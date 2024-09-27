import { Component, Input } from '@angular/core';
import { PoInfoModule } from '@po-ui/ng-components';

@Component({
  selector: 'info-hero',
  standalone: true,
  imports: [PoInfoModule],
  templateUrl: './info-hero.component.html',
  styleUrl: './info-hero.component.css'
})

export class InfoHeroComponent {

  @Input({
    required: true
  }) labelTitle: string = ''

  @Input({
    required: true
  }) labelValue: string = ''

  NgOnInit() {}

}
