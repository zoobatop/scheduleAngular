import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupFields } from './models/signup-fields.interface';
import { PoModule, PoDynamicFormField, PoDynamicModule, PoButtonModule } from '@po-ui/ng-components';
import { SignupService } from './service/signup.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    PoModule,
    PoDynamicModule,
    PoButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router, private signUpService: SignupService) {}

  fields: Array<PoDynamicFormField> = SignupFields;
  dynamicForm!: NgForm;

  getForm(form: NgForm){
    this.dynamicForm = form;
  }

  headToLogin() {
    this.router.navigate(["/"])
  }

  async onSubmit() {
    try {
      const response = firstValueFrom(this.signUpService.signUp(this.dynamicForm.value));
      console.log(response);
    } catch(error) {
      console.error('register failed', error);
    }
  };

}
