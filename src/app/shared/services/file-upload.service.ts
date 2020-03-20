import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private afStorage: AngularFireStorage){
  }

  uploadFile(path: string, file: any): AngularFireUploadTask{
    return this.afStorage.upload(path, file);
  }

  getDownloadURL(path: string){
    return this.afStorage.ref(path).getDownloadURL();
  }
}
