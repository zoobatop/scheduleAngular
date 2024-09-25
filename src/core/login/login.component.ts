import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoModule, PoDynamicFormField, PoDynamicModule, PoButtonModule } from '@po-ui/ng-components';
import { fieldsLogin } from './models/fields.interface';
import { AuthService } from './service/auth.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) { }

  fields: Array<PoDynamicFormField> = fieldsLogin

  dynamicForm!: NgForm;

  ngOnInit(): void { }

  getForm(form: NgForm) {
    this.dynamicForm = form;
  }

  async onSubmit() {
    const { username, password } = this.dynamicForm.value;

    try {
      const response = await firstValueFrom(this.authService.login(username, password));
      if (response.blocked) {
        console.log("blocked")
        // add some message
      } else {
        this.saveStorage(response);
        this.router.navigate(["/home"]);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  private saveStorage(items: any): void {
    let consultantId: number = items.id;
    let dataLogin: string    = Date.now().toString()

    localStorage.setItem('consultantId', consultantId.toString())
    localStorage.setItem('dataLogin'   , dataLogin)
  }

  headToRegister() {
    this.router.navigate(["/register"]);
  };
}