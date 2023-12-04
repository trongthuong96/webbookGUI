import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { ApiInterceptor } from './config/api.interceptor';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ApiInterceptor,
    //   multi: true
    // },
    provideHttpClient(withFetch())
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
