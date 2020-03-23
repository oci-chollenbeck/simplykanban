
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BoardVM } from '../models/board.model';
import { BaseCrudService } from '@app/shared/services/crud.base.service';

@Injectable({
  providedIn: 'root',
})
export class BoardService extends BaseCrudService<BoardVM> {

  constructor(afs: AngularFirestore) {
    const path = 'boards';
    super(path, afs);
  }

  getByOwner(id: string){
    return this.collection.ref.where('ownerId', '==', id).get();
  }
}
