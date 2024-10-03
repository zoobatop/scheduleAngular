import { LoginComponent } from '../core/login/login.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from '../core/register/register.component';
import { HomeComponent } from '../core/home/home.component';
import { CustomerComponent } from '../core/customer/customer.component';
import { ReportComponent } from '../core/report/report.component';
import { ScheduleComponent } from '../core/schedule/schedule.component';
import { UserComponent } from '../core/user/user.component';
import { DashboardComponent } from '../core/dashboard/dashboard.component';
import { AuthGuardService } from '../core/auth/guard/auth-guard.service';
import { ConfigComponent } from '../core/config/config.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'customer',
        component: CustomerComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'report',
        component: ReportComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'schedule',
        component: ScheduleComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'config',
        component: ConfigComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: '**',
        component: LoginComponent
    }
];
