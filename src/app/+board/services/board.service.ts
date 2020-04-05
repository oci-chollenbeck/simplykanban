
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseCrudService } from '@app/shared/services/crud.base.service';
import { IBoard } from '../models/board.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService extends BaseCrudService<IBoard> {

  constructor(afs: AngularFirestore) {
    const path = 'boards';
    super(path, afs);
  }
}
