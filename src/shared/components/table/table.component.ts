import { Component, Input } from '@angular/core';
import { PoTableModule } from '@po-ui/ng-components';

@Component({
  selector: 'default-table',
  standalone: true,
  imports: [
    PoTableModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  constructor() {}
  
  @Input({required: true}) itemsTable: Array<any>  = [];
  @Input({required: true}) columnsTable: Array<any> = [];

  ngOnInit() {}

}
