
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseCrudService } from '@app/shared/services/crud.base.service';
import { IAppSettings } from '../models/app-settings.model';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService extends BaseCrudService<IAppSettings> {

  constructor(afs: AngularFirestore) {
    const path = 'settings';
    super(path, afs);
  }
}
