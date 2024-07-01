import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'angular-74157',
        appId: '1:521677025749:web:a20d647e944503ad490d5c',
        storageBucket: 'angular-74157.appspot.com',
        apiKey: 'AIzaSyAHzlGxZ-j-uDePoZuuYrYjbKLm-q0HTI8',
        authDomain: 'angular-74157.firebaseapp.com',
        messagingSenderId: '521677025749',
      })
    ),
    provideStorage(() => getStorage()),
  ],
  // provideHttpClient config de lay dc cac pthuc post get dlieu tu db len
};
