import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Header } from '../../models/header/header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  // Usamos 'inject' que es la forma más moderna y segura de Angular 18+
  private firestore: Firestore = inject(Firestore);

  constructor() { }

  getHeader(): Observable<Header[]> {
    const headerRef = collection(this.firestore, 'header');
    return collectionData(headerRef) as Observable<Header[]>;
  }
}
