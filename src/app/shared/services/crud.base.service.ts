import { IBaseCrudService } from './crud.interface'; import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { IBaseModelVM } from '../models/base.model';

export abstract class BaseCrudService<T extends IBaseModelVM> implements IBaseCrudService<T> {

  protected collection: AngularFirestoreCollection<T>;

  constructor(path: string, protected afs: AngularFirestore) {
    this.collection = this.afs.collection(path);
  }

  get(identifier: string): Observable<T> {
    return this.collection
      .doc<T>(identifier)
      .snapshotChanges()
      .pipe(
        map(doc => {
          if (doc.payload.exists) {
            /* workaround until spread works with generic types */
            const data = doc.payload.data() as any;
            const id = doc.payload.id;
            return { id, ...data };
          }
        })
      );
  }


  list(): Observable<T[]> {
    return this.collection
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as T;
            data.id = a.payload.doc.id;
            return data;
          });
        })
      );
  }


  add(item: T): Promise<T> {
    const promise = new Promise<T>((resolve) => {
      this.collection.add(item).then(ref => {
        const newItem = {
          id: ref.id,
          /* workaround until spread works with generic types */
          ...(item as any)
        };
        resolve(newItem);
      });
    });
    return promise;
  }


  update(item: T): Promise<T> {
    const entity = _.cloneDeep(item); delete entity.id;
    const promise = new Promise<T>((resolve) => {
      this.collection
        .doc<T>(item.id)
        .set(entity)
        .then(() => {
          resolve({
            ...(item as any)
          });
        });
    });
    return promise;
  }

  delete(id: string): void {
    const docRef = this.collection.doc<T>(id);
    docRef.delete();
  }

}
