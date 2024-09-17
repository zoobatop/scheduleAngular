import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoModule, PoDynamicFormField, PoDynamicModule, PoButtonModule } from '@po-ui/ng-components';
import { fieldsLogin } from './models/fields.interface';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PoModule,
    PoDynamicModule,
    PoButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService) {}

  fields: Array<PoDynamicFormField> = fieldsLogin
  
  dynamicForm!: NgForm;

  ngOnInit(): void {}

  getForm(form: NgForm){
    this.dynamicForm = form;
  }

  async onSubmit() {
    const { username, password } = this.dynamicForm.value;
    
    console.log(this.authService.login(username, password))
  }
}
