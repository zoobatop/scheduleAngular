import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { PoHttpRequestModule } from '@po-ui/ng-components';
import { provideAnimations } from '@angular/platform-browser/animations';
import { spinnerInterceptor } from '../core/auth/interceptors/spinner/spinner.interceptor';
import { authInterceptor } from '../core/auth/interceptors/auth/auth.interceptor';
import { AppInterceptor } from '../core/auth/interceptors/interceptors.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([spinnerInterceptor, authInterceptor])),
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
    importProvidersFrom([PoHttpRequestModule]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations()
  ],
};