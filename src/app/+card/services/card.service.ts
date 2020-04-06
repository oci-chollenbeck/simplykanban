
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseCrudService } from '@app/shared/services/crud.base.service';
import { ICard } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService extends BaseCrudService<ICard> {

  constructor(afs: AngularFirestore) {
    const path = 'cards';
    super(path, afs);
  }
}
