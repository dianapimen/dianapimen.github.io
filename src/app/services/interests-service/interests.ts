import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { InterestsDocument } from '../../models/interests/interests.model';

@Injectable({ providedIn: 'root' })
export class InterestsService {
  constructor(private firestore: Firestore) {}

  getInterests(): Observable<InterestsDocument[]> {
    const interestsRef = collection(this.firestore, 'interests');
    return collectionData(interestsRef) as Observable<InterestsDocument[]>;
  }
}
