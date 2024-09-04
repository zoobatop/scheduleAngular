import { Component } from '@angular/core';
import { PoDynamicFormField, PoDynamicModule, PoButtonModule } from '@po-ui/ng-components';
import { fieldsLogin } from './models/fields.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PoDynamicModule,
    PoButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor() {}

  fields: Array<PoDynamicFormField> = fieldsLogin
  
  onClick(): void {
    alert("help")
  }
}
