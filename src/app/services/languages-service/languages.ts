import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LanguagesDocument } from '../../models/languages/languages.model';

@Injectable({ providedIn: 'root' })
export class LanguagesService {
  constructor(private firestore: Firestore) {}

  getLanguages(): Observable<LanguagesDocument[]> {
    const languagesRef = collection(this.firestore, 'languages');
    return collectionData(languagesRef) as Observable<LanguagesDocument[]>;
  }
}
