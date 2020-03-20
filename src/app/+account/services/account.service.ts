import { Injectable } from '@angular/core';
import { BaseCrudService } from '@app/shared/services/crud.base.service';
import { UserProfileVM } from '../models/user-profile.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseCrudService<UserProfileVM> {

  constructor(afs: AngularFirestore) {
    const path = 'test';
    super(path, afs);
  }
}
