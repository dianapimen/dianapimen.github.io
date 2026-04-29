import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Certificate } from '../../models/certificates/certificates.model';

@Injectable({ providedIn: 'root' })
export class CertificatesService {
  constructor(private firestore: Firestore) {}

  getCertificates(): Observable<Certificate[]> {
    const certRef = collection(this.firestore, 'certificates');
    return collectionData(certRef) as Observable<Certificate[]>;
  }
}
