import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { BookService } from './services/book.service';
import { ApiInterceptor } from './config/api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(withHttpTransferCacheOptions({
      includePostRequests: true,
    })),
    provideHttpClient(withFetch()),
  ]
};
