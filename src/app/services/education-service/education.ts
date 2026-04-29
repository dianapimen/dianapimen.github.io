import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Education } from '../../models/education/education.model';

@Injectable({ providedIn: 'root' })
export class EducationService {
  constructor(private firestore: Firestore) {}

  getEducation(): Observable<Education[]> {
    const educationRef = collection(this.firestore, 'education');
    return collectionData(educationRef) as Observable<Education[]>;
  }
}
