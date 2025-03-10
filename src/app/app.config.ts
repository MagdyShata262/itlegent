import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"ecommers-76478","appId":"1:430619485382:web:0d9d7969c3ecb6e169a3c7","databaseURL":"https://ecommers-76478-default-rtdb.firebaseio.com","storageBucket":"ecommers-76478.appspot.com","locationId":"us-central","apiKey":"AIzaSyDDHmwh57V7lxS-c8rXwDN5QR_Jg3-0rHo","authDomain":"ecommers-76478.firebaseapp.com","messagingSenderId":"430619485382","measurementId":"G-3H5ST7BD15"})), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"fir-frontend-aed9b","appId":"1:643785967442:web:0e789f508ae78eab3f5c8b","databaseURL":"https://fir-frontend-aed9b-default-rtdb.firebaseio.com","storageBucket":"fir-frontend-aed9b.firebasestorage.app","apiKey":"AIzaSyChQu8dsa7B5O4DGbQe3reDLrmn7LshUWk","authDomain":"fir-frontend-aed9b.firebaseapp.com","messagingSenderId":"643785967442"})), provideFirestore(() => getFirestore())]
};
