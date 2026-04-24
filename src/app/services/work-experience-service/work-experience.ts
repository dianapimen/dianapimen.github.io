import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  constructor(private firestore: Firestore) {}

  getWorkExperience(): Observable<any[]> {
    // El PDF dice: "Actualiza cada servicio para leer su respectiva colección"
    const workRef = collection(this.firestore, 'work-experience');
    return collectionData(workRef) as Observable<any[]>;
  }
}

/*import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'; // Importación de Firebase [cite: 141]
import { Observable } from 'rxjs';
import { WorkExperience } from '../../models/work-experience/work-experience.model'; // Tu modelo [cite: 141]
@Injectable({
  providedIn: 'root',
})
export class WorkExperienceService {

  constructor(private firestore: Firestore) {} // Inyección de Firestore [cite: 143]

  getWorkExperience(): Observable<WorkExperience[]> {
    const workRef = collection(this.firestore, 'work-experience'); // Nombre de tu colección en Firebase [cite: 143]
    return collectionData(workRef) as Observable<WorkExperience[]>;
  }
}*/
