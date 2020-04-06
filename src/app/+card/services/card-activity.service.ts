
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseCrudService } from '@app/shared/services/crud.base.service';
import { ICardActivity } from '../models/card-activity.model';

@Injectable({
  providedIn: 'root',
})
export class CardActivityService extends BaseCrudService<ICardActivity> {

  constructor(afs: AngularFirestore) {
    const path = 'activity';
    super(path, afs);
  }
}
