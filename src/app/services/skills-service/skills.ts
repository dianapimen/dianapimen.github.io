import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { SkillsDocument } from '../../models/skills/skills.model'; // Importamos el modelo

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private firestore: Firestore) {}

  getSkills(): Observable<SkillsDocument[]> {
    const skillsRef = collection(this.firestore, 'skills');
    return collectionData(skillsRef) as Observable<SkillsDocument[]>;
  }
}
