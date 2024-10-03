import { Component, Input} from '@angular/core';
import { PoModalModule } from '@po-ui/ng-components';

@Component({
  selector: 'modal-default',
  standalone: true,
  imports: [PoModalModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input({ required: true }) labelTitle!: string

}
