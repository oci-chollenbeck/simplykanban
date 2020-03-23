import { IBaseCrudService } from './crud.interface'; import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { IBaseModelVM } from '../models/base.model';

export abstract class BaseCrudService<T extends IBaseModelVM> implements IBaseCrudService<T> {

  protected collection: AngularFirestoreCollection<T>;

  collectionQuery: firebase.firestore.Query;

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

  async query(field: string, operator: firebase.firestore.WhereFilterOp, value: string): Promise<T[]> {
    const q = await this.collection.ref.where(field, operator, value).get();

    return q.docs.map(m => {
      return {id: m.id, ...(m.data() as any)};
    });
  }


  add(item: T): Promise<T> {
    const promise = new Promise<T>((resolve) => {
      const newItem = {
        ...(item as any)
      };
      this.collection.add(newItem).then(ref => {
        newItem.id = ref.id;
        resolve(newItem);
      });
    });
    return promise;
  }


  update(item: T): Promise<T> {
    const entity = { ...(item as any) }; delete entity.id;
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
