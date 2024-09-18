import { LoginComponent } from '../core/login/login.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from '../core/register/register.component';
import { HomeComponent } from '../core/home/home.component';
import { CustomerComponent } from '../core/customer/customer.component';
import { ReportComponent } from '../core/report/report.component';
import { ScheduleComponent } from '../core/schedule/schedule.component';
import { UserComponent } from '../core/user/user.component';
import { DashboardComponent } from '../core/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'report',
        component: ReportComponent
    },
    {
        path: 'schedule',
        component: ScheduleComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];
