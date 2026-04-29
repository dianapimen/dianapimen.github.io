import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';

bootstrapApplication(App, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    provideFirestore(() => {
        const app = getApp(); // Obtiene la app ya inicializada arriba
        return getFirestore(app); // Le pasa la app y el nombre con el guion
    }),
  ],
}).catch((err) => console.error(err));
